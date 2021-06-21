const fs = require('fs');
const PasswordModelTrain = require(__dirname + '/PasswordModelTrain.js');


class PasswordSecurity {
    passwordModelTrain(versionData, comment) {

        // return 'passwordModelTrain';
        return new PasswordModelTrain.PasswordModelTrain().passwordModelTrain(0.1, "Test Training");
    };

    passwordModelDistribution(versionData, gatewayInfo) {
        return 'passwordModelDistribution';
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
