const fs = require('fs');
const PasswordModelTrain = require(__dirname + '/PasswordModelTrain.js');
const PasswordModelDistribution = require(__dirname + '/PasswordModelDistribution.js');

class PasswordSecurity {
    passwordModelTrain(versionData, comment) {
        return new PasswordModelTrain.PasswordModelTrain().passwordModelTrain(0.1, "Test Training");
    };

    passwordModelDistribution(versionData, gatewayInfo) {
        return new PasswordModelDistribution.PasswordModelDistribution().passwordModelDistribution(0.1, "localhost");
    };

    passwordDictUpdate(dictionary, comment) {
        
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
}

module.exports.PasswordSecurity = PasswordSecurity;
