const fs = require('fs');

class PasswordModelParaUpdate {
    passwordModelParaUpdate(node, units, activation, epochs, comment, parameter) {
        parameter = JSON.stringify(parameter);
        fs.writeFileSync(__dirname + '/../files/passwordModelTrainPara.json', parameter, 'utf8');
    }

    passwordModelParaRead() {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelTrainPara.json', 'utf8');
        json = JSON.parse(json);
        console.log(json);
    }
}

module.exports.PasswordModelParaUpdate = PasswordModelParaUpdate