const fs = require('fs');

class passwordSecurity {
    passwordModelTrain(versionData, comment) {
        return 'passwordModelTrain';
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

module.exports.passwordSecurity = passwordSecurity;
