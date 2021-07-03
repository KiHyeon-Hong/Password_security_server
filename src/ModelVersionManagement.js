const fs = require('fs');

class ModelVersionManagement {
    modelVersionValidation(versionData) {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelVersionData.json', 'utf8');
        json = JSON.parse(json);

        versionData = versionData.toString();

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

    latestVersionModel() {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelVersionData.json', 'utf8');
        json = JSON.parse(json);

        return json[json.length - 1].version;
    }

    trainModelVersionWrite(versionData, dictionaryVersion, accuracy, loss, comment) {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelVersionData.json', 'utf8');
        json = JSON.parse(json);

        json[json.length] = {"version":versionData,"dictionary":dictionaryVersion,"date":new Date,"accuracy":accuracy,"loss":loss,"comment":comment};

        json = JSON.stringify(json);

        fs.writeFileSync(__dirname + '/../files/passwordModelVersionData.json', json, 'utf8');

        return {
            state: 200,
            comment: `${versionData} Model 등록 완료`
        };
    }

    passwordModelVersion(versionData) {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelVersionData.json', 'utf8');
        json = JSON.parse(json);

        for(let i = 0; i < json.length; i++) {
            if(json[i].version == versionData) {
                return json[i];
            }
        }

        return json;
    }

    passwordModelComment(versionData, comment) {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelVersionData.json', 'utf8');
        json = JSON.parse(json);
        
        versionData = versionData.toString();
        comment = comment.toString();

        if(comment.split('\'').length != 1 || comment.split('"').length != 1) {
            return {
                state: 303,
                comment: `유효하지 않은 코멘트`
            };
        }

        for(let i = 0; i < json.length; i++) {
            if(json[i].version == versionData) {
                json[i].comment = comment;

                json = JSON.stringify(json);
                fs.writeFileSync(__dirname + '/../files/passwordModelVersionData.json', json, 'utf8');

                return {
                    state: 200,
                    comment: `${versionData} model 코멘트 수정 완료`
                };
            }
        }

        return {
            state: 303,
            comment: `${versionData} model이 존재하지 않음`
        };
    }

    passwordModelDelete(versionData) {
        var json = fs.readFileSync(__dirname + '/../files/passwordModelVersionData.json', 'utf8');
        json = JSON.parse(json);

        if(json.length == 1) {
            return {
                state: 307,
                comment: `삭제 후 모델이 존재하지 않음`
            };
        }

        versionData = versionData.toString();

        for(let i = 0; i < json.length; i++) {
            if(json[i].version == versionData) {
                json.splice(i, 1);

                json = JSON.stringify(json);
                fs.writeFileSync(__dirname + '/../files/passwordModelVersionData.json', json, 'utf8');

                return {
                    state: 200,
                    comment: `${versionData} model 삭제 완료`
                };
            }
        }

        return {
            state: 307,
            comment: `${versionData} model이 존재하지 않음`
        };
    }
}

module.exports.ModelVersionManagement = ModelVersionManagement;