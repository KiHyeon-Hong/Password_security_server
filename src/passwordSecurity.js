const fs = require('fs');

const PasswordModelTrain = require(__dirname + '/PasswordModelTrain.js');
const PasswordModelDistribution = require(__dirname + '/PasswordModelDistribution.js');
const LeakPasswordClassification = require(__dirname + '/LeakPasswordClassification.js');
const PasswordValidationTest = require(__dirname + '/PasswordValidationTest.js');
const ModelVersionManagement = require(__dirname + '/ModelVersionManagement.js');
const PasswordModelParaUpdate = require(__dirname + '/PasswordModelParaUpdate.js');

class PasswordSecurity {
    // 학습 후 학습에 사용한 사전도 저장? -> 방법 구상 필요
    passwordModelTrain(versionData, comment) {
        return new PasswordModelTrain.PasswordModelTrain().passwordModelTrain(versionData, comment);
    };

    passwordModelDistribution(versionData, gatewayInfo) {
        return new PasswordModelDistribution.PasswordModelDistribution().passwordModelDistribution(versionData, gatewayInfo);
    };

    // 파일 3개 변경 기능 추가 필요
    passwordDictUpdate(dictionary, comment) {
        var pwd = new LeakPasswordClassification.LeakPasswordClassification();
        return pwd.leakPasswordClassification(dictionary, comment);
    };

    passwordModelParaUpdate(parameter) {
        var pwd = new PasswordModelParaUpdate.PasswordModelParaUpdate();
        return pwd.passwordModelParaUpdate(parameter.node, parameter.unit, parameter.activation, parameter.epoch, parameter.comment, parameter);
    };

    passwordModelComment(versionData, comment) {
        var pwd = new ModelVersionManagement.ModelVersionManagement();
        return pwd.passwordModelComment(versionData, comment);
    };

    passwordModelDelete(versionData) {
        var pwd = new ModelVersionManagement.ModelVersionManagement();
        return pwd.passwordModelDelete(versionData);
    };

    passwordModelVersion(versionData) {
        var pwd = new ModelVersionManagement.ModelVersionManagement();
        return pwd.passwordModelVersion(versionData);
    };

    getLog(level, startDate, finishDate) {
        return 'getLog';
    }




    passwordModelTest() {
        var pwd = new PasswordModelParaUpdate.PasswordModelParaUpdate();
        pwd.passwordModelParaRead();
    }
}

module.exports.PasswordSecurity = PasswordSecurity;
