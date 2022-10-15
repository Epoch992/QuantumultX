/***
[rewrite_local]
http:\/\/wallpaper\.soutushenqi\.com\/api\/v1\/account\/token url script-response-body 自己命名.js
hostname = wallpaper.soutushenqi.com
***/
var body = JSON.parse($response.body);
var obj = {
  "error_msg": null,
  "data": {
    "username": "永久破解",
    "coverUrl": null,
    "vipPastDueTime": 0,
    "unionId": null,
    "updateTime": 0,
    "vipLabelLevel": 3,
    "vipLabel": "永久会员",
    "avatarUrl": null,
    "category": null,
    "vipType": 1024,
    "id": 0,
    "gender": 0,
    "isVirtual": 0,
    "qqUnionId": null,
    "accountSign": null,
    "token": "0",
    "age": 0,
    "createTime": 0,
    "phoneNum": "",
    "webBackground": null,
    "vitalityVipPastDueTime": 0,
    "userId": "0"
  },
  "code": 200
}
$done({ body: JSON.stringify(obj) });
