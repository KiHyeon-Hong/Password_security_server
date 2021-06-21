const fs = require('fs');

class PasswordModelDistribution {
    passwordModelDistribution(versionData, gatewayInfo) {
    return __dirname +"/../passwordModel/" + versionData;
  }
}

module.exports.PasswordModelDistribution = PasswordModelDistribution;
