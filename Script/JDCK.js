#!name=JDCK
#!desc=JDCK
 
[Script] 
JDwskey = type=http-response,pattern=^https:\/\/api\.m\.jd\.com\/client\.action(\.+)newUserInfo,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Epoch992/QuantumultX/QX/Script/JDCK.js,script-update-interval=0 

[rewrite_local]

^https:\/\/api\.m\.jd\.com\/client\.action(\.+)newUserInfo url script-response-body https://raw.githubusercontent.com/Epoch992/QuantumultX/QX/Script/JDwskey.js

[mitm]

hostname = api.m.jd.com
