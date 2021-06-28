const fs = require('fs');

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

        console.log(`${filePath}passwordModel/${versionData}`);

        return `${filePath}passwordModel/${versionData}`;
    }
}

module.exports.PasswordModelDistribution = PasswordModelDistribution;
