const fs = require('fs');

class ModelVersionManagement {
    modelVersionManagement() {

    }

    /*
        있는 버전이면 1, 없으면 0 반환
    */
    modelVersionValidation(versionData) {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelVersionData.json', 'utf8');
        json = JSON.parse(json);

        var flag = 0;
        for(let i = 0; i < json.length; i++) {
            if(json[i].version == versionData)
                flag = 1;
        }

        if(flag == 1) {
            return 1;
        }
        else {
            return 0;
        }
    }

    trainModelVersionWrite(versionData, dictionaryVersion, accuracy, loss, comment) {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelVersionData.json', 'utf8');
        json = JSON.parse(json);

        json[json.length] = {"version":versionData,"dictionary":dictionaryVersion,"date":new Date,"accuracy":accuracy,"loss":loss,"comment":comment};

        json = JSON.stringify(json);

        fs.writeFileSync(__dirname + '/../files/passwordModelVersionData.json', json, 'utf8')
    }
}

module.exports.ModelVersionManagement = ModelVersionManagement;