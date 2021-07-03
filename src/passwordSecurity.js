const fs = require('fs');

const PasswordModelTrain = require(__dirname + '/PasswordModelTrain.js');
const PasswordModelDistribution = require(__dirname + '/PasswordModelDistribution.js');
const LeakPasswordClassification = require(__dirname + '/LeakPasswordClassification.js');
const ModelVersionManagement = require(__dirname + '/ModelVersionManagement.js');
const PasswordModelParaUpdate = require(__dirname + '/PasswordModelParaUpdate.js');

class PasswordSecurity {
    passwordModelTrain(versionData, comment) {
        return new PasswordModelTrain.PasswordModelTrain().passwordModelTrain(versionData, comment);
    };

    passwordModelDistribution(versionData, gatewayInfo, comment) {
        return new PasswordModelDistribution.PasswordModelDistribution().passwordModelDistribution(versionData, gatewayInfo, comment);
    };

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
}

module.exports.PasswordSecurity = PasswordSecurity;
