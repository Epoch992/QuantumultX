/****
今日热榜
[rewrite_local]
^https:\/\/api2\.tophub\.app\/account\/sync url script-response-body https://raw.githubusercontent.com/Epoch992/QuantumultX/QX/Script/TopHub.js
hostname = api2.tophub.app
****/
let obj = JSON.parse($response.body);

obj = {
  "error": false,
  "data": {
    "vip_expired": "2566584780",
    "is_vip_now": true,
    "is_vip": "1"
  },
  "status": 200
}
$done({body: JSON.stringify(obj)});
