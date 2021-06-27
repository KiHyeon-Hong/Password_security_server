const fs = require('fs');
const PasswordModelTrain = require(__dirname + '/PasswordModelTrain.js');
const PasswordModelDistribution = require(__dirname + '/PasswordModelDistribution.js');
const LeakPasswordClassification = require(__dirname + '/LeakPasswordClassification.js');
const PasswordValidationTest = require(__dirname + '/PasswordValidationTest.js');

class PasswordSecurity {
    passwordModelTrain(versionData, comment) {
        return new PasswordModelTrain.PasswordModelTrain().passwordModelTrain(versionData, comment);
    };

    passwordModelDistribution(versionData, gatewayInfo) {
        return new PasswordModelDistribution.PasswordModelDistribution().passwordModelDistribution(versionData, gatewayInfo);
    };

    passwordDictUpdate(dictionary, comment) {
        var pwd = new LeakPasswordClassification.LeakPasswordClassification();
        pwd.leakPasswordClassification(password, comment);
        
        return 'passwordDictUpdate';
    };

    passwordModelParaUpdate(parameter, comment) {
        return 'passwordModelParaUpdate';
    };

    passwordModelComment(versionData, comment) {
        return 'passwordModelComment';
    };

    passwordModelDelete(versionData) {
        return 'passwordModelDelete';
    };

    passwordModelVersion(versionData) {
        return 'passwordModelVersion';
    };

    getLog(level, startDate, finishDate) {
        return 'getLog';
    }

    passwordModelTest(password) {
        
    }
    async passwordValidation(password) {
        // 반환받은 결과를 바탕으로 피드백 기능 필요
        const result = await new PasswordValidationTest.PasswordValidationTest().passwordValidationTest(password);
        return result;
    };
}

module.exports.PasswordSecurity = PasswordSecurity;
