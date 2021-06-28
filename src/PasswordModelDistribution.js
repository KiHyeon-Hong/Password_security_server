const fs = require('fs');

const ModelVersionManagement = require(__dirname + '/ModelVersionManagement.js');

class PasswordModelDistribution {
    /*
        입력받은 versionData 디렉터리까지의 경로를 반환
    */
    passwordModelDistribution(versionData, gatewayInfo) {
        var path = __dirname;

        path = path.split('\\');

        var filePath = '';
        for(let i = 0; i < path.length - 1; i++) {
            filePath = filePath + path[i] + '/';
        }

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
