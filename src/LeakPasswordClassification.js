const fs = require('fs');

const koreanZxcvbn = require(__dirname + '/../lib/koreanZxcvbn');
const levenshteinDistance = require(__dirname + '/../lib/levenshteinDistance.js');
const ludsPoint = require(__dirname + '/../lib/ludsPoint.js');

const koreanZxcvbnString = require(__dirname + '/../lib/koreanZxcvbnString');
const comparePoint = new koreanZxcvbnString.koreanZxcvbnString.koreanZxcvbnString();


class LeakPasswordClassification {
    leakPasswordClassification(password, comment) {
        password = password.toString();

        if(password.split('\n').length != 1 || password.split(',').length != 1) {
            return {
                state: 304,
                comment: `${password}는 유효하지 않은 비밀번호`
            };
        }

        fs.appendFileSync(__dirname + '/../files/LeakPasswordFeatures.txt', password + ',' + ((koreanZxcvbn(password).score * 2) + comparePoint.frequencyComparePoint(password)) + ',' + ludsPoint.ludsPoint(password).nScore + ',' + levenshteinDistance.totalLVD(password) + ',' + 1 + '\n', 'utf8');
        fs.appendFileSync(__dirname + '/../lib/koreanZxcvbnString/files/wordDataToEng.txt', ',' + password, 'utf8');

        return {
            state: 200,
            comment: `유출 비밀번호 등록 완료`
        };
    }

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

        return {
            state: 200,
            comment: '유출 비밀번호 예측모델 학습 데이터 특징 추출 완료'
        }
    }
}

module.exports.LeakPasswordClassification = LeakPasswordClassification