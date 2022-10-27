[rewrite_local]

https://api.m.jd.com/client.action(.+)newUserInfo url script-response-body https://raw.githubusercontent.com/Epoch992/QuantumultX/QX/Script/JDwskey.js

[mitm]

hostname = api.m.jd.com
