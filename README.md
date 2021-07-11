## Installation


### ./.npmrc
```txt
//npm.pkg.github.com/:_authToken=발급받은 ReadOnly_key
@kihyeon-hong:registry=https://npm.pkg.github.com/
```

### npm
```bash
npm install @kihyeon-hong/password_security_server@1.1.2
```


## Usage

### init
```js
const PasswordSecurityServer = require('@kihyeon-hong/password_security_server');
var pwd = new PasswordSecurityServer.PasswordSecurity.PasswordSecurity();
```

### pwd.passwordModelTrain(versionData, comment);

- 해당 버전으로 모델 학습을 수행한다.

#### code
```js
pwd.passwordModelTrain('0.1', 'First Training Model');
```

#### result
```bash
// success
Model Train Start
epoch 0 { loss: 0.16097141802310944 } RMSE ->  0.4012124350305078
epoch 1 { loss: 0.0859527587890625 } RMSE ->  0.2931770093118874
epoch 2 { loss: 0.07562059909105301 } RMSE ->  0.274991998230954
epoch 3 { loss: 0.07314702123403549 } RMSE ->  0.2704570598709442
epoch 4 { loss: 0.07214268296957016 } RMSE ->  0.26859389972516157
epoch 5 { loss: 0.07183273881673813 } RMSE ->  0.26801630326668213
epoch 6 { loss: 0.07142296433448792 } RMSE ->  0.2672507517940556
Successfully saved the artifacts.

// error
Duplicate Version
```


### passwordModelDistribution(versionData, gatewayInfo, comment)

- 학습한 모델 배포를 위해 해당 버전의 폴더 위치를 반환한다.
- 해당 버전이 없다면 가장 최신 버전으로 반환한다.

#### code
```js
pwd.passwordModelDistribution('0.1', 'localhost', 'Update Model');

// res.sendFile(pwd.passwordModelDistribution(req.query.versionData, '', req.query.comment) + `/model.json`);
// res.sendFile(pwd.passwordModelDistribution(req.query.versionData, '', req.query.comment) + `/weights.bin`);
```

#### result
```bash
C:/Users/ghdrl/Desktop/temp/code/project/Public/PasswordSecurity/Password_security_server_express/node_modules/@kihyeon-hong/password_security_server/passwordModel/0.1
```


### passwordDictUpdate(dictionary, comment)

- 학습에 새로운 유출된 비밀번호를 추가한다.

#### code
```js
pwd.passwordDictUpdate('q1w2e3r4', 'Update Leak password');
```

#### result
```bash
// success
```


### passwordModelParaUpdate(parameter)

- 학습을 위한 새로운 하이퍼 파라매터를 정의한다.

#### code
```js
var parameter = {"node":4,"unit":[3,5,3,1],"activation":"relu","epoch":7,"comment":"test message."};
pwd.passwordModelParaUpdate(parameter);
```

#### result
```bash
// success
```


### passwordModelComment(versionData, comment)

- 해당 버전의 새로운 코멘트를 수정한다.

#### code
```js
pwd.passwordModelComment('0.1', 'Update comment');
```

#### result
```bash
// success
Update comment complete

// error
No Search Model Version
```


### passwordModelDelete(versionData)

- 해당 버전의 모델을 삭제한다.

#### code
```js
pwd.passwordModelDelete('0.1');
```

#### result
```
// success
Delete 0.1 model

//error
No Search Model Version
```


### passwordModelVersion(versionData)

- 해당 버전 모델의 정보를 확인한다.
- 파라매터를 입력하지 않으면 모든 모델의 정보를 반환한다.

#### code
```js
pwd.passwordModelVersion('0.1')
```

#### result
```json
[
  {
    version: '0.1',
    dictionary: '0.1',
    date: '2021-06-28T04:29:01.109Z',
    accuracy: 0.912,
    loss: 0.07130961120128632,
    comment: 'new comment'
  },
  {
    version: '0.2',
    dictionary: '0.1',
    date: '2021-07-05T01:42:33.974Z',
    accuracy: 0.90765,
    loss: 0.07142296433448792,
    comment: 'new comment'
  }
]
```


### getLog(level, startDate, finishDate)

- 

#### code
```js
pwd.getLog(level, startDate, finishDate)
```

#### result
```

```