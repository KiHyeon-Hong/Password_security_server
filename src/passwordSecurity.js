const fs = require('fs');

const PasswordModelTrain = require(__dirname + '/PasswordModelTrain.js');
const PasswordModelDistribution = require(__dirname + '/PasswordModelDistribution.js');
const LeakPasswordClassification = require(__dirname + '/LeakPasswordClassification.js');
const PasswordValidationTest = require(__dirname + '/PasswordValidationTest.js');
const ModelVersionManagement = require(__dirname + '/ModelVersionManagement.js');
const PasswordModelParaUpdate = require(__dirname + '/PasswordModelParaUpdate.js');

class PasswordSecurity {
    passwordModelTrain(versionData, comment) {
        return new PasswordModelTrain.PasswordModelTrain().passwordModelTrain(versionData, comment);
    };

    passwordModelDistribution(versionData, gatewayInfo) {
        return new PasswordModelDistribution.PasswordModelDistribution().passwordModelDistribution(versionData, gatewayInfo);
    };

    passwordDictUpdate(dictionary, comment) {
        var pwd = new LeakPasswordClassification.LeakPasswordClassification();
        pwd.leakPasswordClassification(dictionary, comment);
        
        return 'passwordDictUpdate';
    };

    passwordModelParaUpdate(parameter) {
        var pwd = new PasswordModelParaUpdate.PasswordModelParaUpdate();
        pwd.passwordModelParaUpdate(parameter.node, parameter.unit, parameter.activation, parameter.epoch, parameter.comment, parameter);

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




    passwordModelTest() {
        var pwd = new PasswordModelParaUpdate.PasswordModelParaUpdate();
        pwd.passwordModelParaRead();
    }

    async passwordValidation(password) {
        // 반환받은 결과를 바탕으로 피드백 기능 필요
        const result = await new PasswordValidationTest.PasswordValidationTest().passwordValidationTest(password);
        return result;
    };
}

module.exports.PasswordSecurity = PasswordSecurity;
