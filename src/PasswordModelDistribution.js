const fs = require('fs');

class PasswordModelDistribution {
  passwordModelDistribution(versionData, gatewayInfo) {
    var path = __dirname;

    path = path.split('\\');

    var filePath = '';
    for(let i = 0; i < path.length - 1; i++) {
      filePath = filePath + path[i] + '/';
    }

    return `${filePath}passwordModel/${versionData}`;
  }
}

module.exports.PasswordModelDistribution = PasswordModelDistribution;
