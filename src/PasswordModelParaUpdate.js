const fs = require('fs');

class PasswordModelParaUpdate {
    passwordModelParaUpdate(node, units, activation, epochs, comment, parameter) {
        parameter = JSON.stringify(parameter);
        fs.writeFileSync(__dirname + '/../files/passwordModelTrainPara.json', parameter, 'utf8');

        return {
            state: 200,
            comment: `하이퍼 파라매터 수정 완료`
        };
    }
}

module.exports.PasswordModelParaUpdate = PasswordModelParaUpdate