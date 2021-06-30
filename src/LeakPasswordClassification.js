const fs = require('fs');

const koreanZxcvbn = require(__dirname + '/../lib/koreanZxcvbn');
const levenshteinDistance = require(__dirname + '/../lib/levenshteinDistance.js');
const ludsPoint = require(__dirname + '/../lib/ludsPoint.js');

const koreanZxcvbnString = require(__dirname + '/../lib/koreanZxcvbnString');
const comparePoint = new koreanZxcvbnString.koreanZxcvbnString.koreanZxcvbnString();


class LeakPasswordClassification {
    /*
        새로운 유출 비밀번호 추가 시 학습 및 특징 추출을 위해 파일 변경
        koreanZxcvbn 파일 추가 구상 -> append로 중간에 넣어야 함
    */
    leakPasswordClassification(password, comment) {
        fs.appendFileSync(__dirname + '/../files/LeakPasswordFeatures.txt', password + ',' + ((koreanZxcvbn(password).score * 2) + comparePoint.frequencyComparePoint(password)) + ',' + ludsPoint.ludsPoint(password).nScore + ',' + levenshteinDistance.totalLVD(password) + ',' + 1 + '\n', 'utf8');
        fs.appendFileSync(__dirname + '/../lib/koreanZxcvbnString/files/wordDataToEng.txt', ',' + password, 'utf8');

        return `Update password: ${password}, comment: ${comment}`;
    }

    /*
        외부에서 사용하지 않는 메소드
        LeakData의 데이터를 통하여 3개의 특징 추출 및 데이터 셋 구축 메소드
    */
    leakPasswordsClassification() {
        var datas = fs.readFileSync(__dirname + '/../files/LeakData.txt', 'utf8');
        datas = datas.split('\n');

        var data = [];
        var value = [];

        for(let i = 0; i < datas.length; i++) {
            data[i] = datas[i].split(':')[0];
            value[i] = datas[i].split(':')[1];
        }

        var leakDatas = [];
        var leakValues = [];
        var notLeakDatas = [];
        var notLeakValues = [];

        var leakCount = 0;
        var notLeakCount = 0;

        for(let i = 0; i < datas.length; i++) {
            if(value[i] == 0) {
                notLeakDatas[notLeakCount] = data[i];
                notLeakValues[notLeakCount] = value[i];
                notLeakCount += 1;

            }
            else {
                leakDatas[leakCount] = data[i];
                leakValues[leakCount] = value[i];
                leakCount += 1;  
        
            }
        }

        fs.writeFileSync(__dirname + '/../files/LeakPasswordFeatures.txt', '', 'utf8');

        for(let i = 0; i < leakDatas.length; i++) {
            fs.appendFileSync(__dirname + '/../files/LeakPasswordFeatures.txt', leakDatas[i] + ',' + ((koreanZxcvbn(leakDatas[i]).score * 2) + comparePoint.frequencyComparePoint(leakDatas[i])) + ',' + ludsPoint.ludsPoint(leakDatas[i]).nScore + ',' + levenshteinDistance.totalLVD(leakDatas[i]) + ',' + leakValues[i] + '\n', 'utf8');
        }

        fs.writeFileSync(__dirname + '/../files/notLeakPasswordFeatures.txt', '', 'utf8');

        for(let i = 0; i < notLeakDatas.length; i++) {
            fs.appendFileSync(__dirname + '/../files/notLeakPasswordFeatures.txt', notLeakDatas[i] + ',' + ((koreanZxcvbn(notLeakDatas[i]).score * 2) + comparePoint.frequencyComparePoint(notLeakDatas[i])) + ',' + ludsPoint.ludsPoint(notLeakDatas[i]).nScore + ',' + levenshteinDistance.totalLVD(notLeakDatas[i]) + ',' + notLeakValues[i] + '\n', 'utf8');
        }

    }
}

module.exports.LeakPasswordClassification = LeakPasswordClassification