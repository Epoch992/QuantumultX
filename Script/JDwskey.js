/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

ck =$request.headers.Cookie
var CookieValue = ck.match(/wskey=.+?;/)

data=JSON.parse($response.body)
    data = data.userInfoSns.unickName
    url = 'Wskey%E8%8E%B7%E5%8F%96%E5%A6%82%E4%B8%8B'

console.log(ck)
$notify(decodeURI(url), "京东wskey获取成功", "pin="+data+";"+CookieValue);
    $done();
