const fs = require('fs');

const ModelVersionManagement = require(__dirname + '/ModelVersionManagement.js');

class PasswordModelDistribution {
    passwordModelDistribution(versionData, gatewayInfo, comment) {
        var path = __dirname;

        var tempPath = path.split('\\');

        if(tempPath.length == 1) {
            tempPath = path.split('/');
        }

        path = tempPath;

        var filePath = '';
        for(let i = 0; i < path.length - 1; i++) {
            filePath = filePath + path[i] + '/';
        }

        versionData = versionData.toString();

        var pwd = new ModelVersionManagement.ModelVersionManagement();
        if(pwd.modelVersionValidation(versionData)) {
            console.log(`${filePath}passwordModel/${versionData}`);
            return `${filePath}passwordModel/${versionData}`;
        }

        console.log(`${filePath}passwordModel/${pwd.latestVersionModel()}`);
        return `${filePath}passwordModel/${pwd.latestVersionModel()}`;
    }
}

module.exports.PasswordModelDistribution = PasswordModelDistribution;
