const fs = require('fs');

const koreanZxcvbn = require(__dirname + '/../lib/koreanZxcvbn');
const levenshteinDistance = require(__dirname + '/../lib/levenshteinDistance.js');
const ludsPoint = require(__dirname + '/../lib/ludsPoint.js');

const koreanZxcvbnString = require(__dirname + '/../lib/koreanZxcvbnString');
const comparePoint = new koreanZxcvbnString.koreanZxcvbnString.koreanZxcvbnString();

var tf = require('@tensorflow/tfjs');
require("tfjs-node-save");

class PasswordValidationTest {
    /*
        외부에서는 사용하지 않을 메소드
        테스트를 위해 사용
    */
    async passwordValidationTest(versionData, password) {
        var feature = [(koreanZxcvbn(password).score * 2) + comparePoint.frequencyComparePoint(password), ludsPoint.ludsPoint(password).nScore, levenshteinDistance.totalLVD(password)];

        const loadedModel = await tf.loadLayersModel("file://" + __dirname + `/../passwordModel/${versionData}/model.json`);
        var predictPoint = loadedModel.predict(tf.tensor([feature]));
        predictPoint = Array.from(predictPoint.dataSync())[0];

        return predictPoint;
    };

    passwordTrainFileTest() {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelVersionData.json', 'utf8');
        json = JSON.parse(json);

        json[json.length] = {"identificationUp":123,"identificationDown":123,"minMaxCount":123,"blinkPoint":123};

        json = JSON.stringify(json);

        fs.writeFileSync(__dirname + '/../files/passwordModelVersionData.json', json, 'utf8')
    }

    
}

module.exports.PasswordValidationTest = PasswordValidationTest;