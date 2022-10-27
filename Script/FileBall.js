#!name=FileBall
#!desc=FileBall
[Script] 
FileBall = type=http-response,pattern=^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/(\$RCAnonymousID%3A\w{32}|\w{34}|\S{36}))$,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Epoch992/QuantumultX/QX/Script/FileBall.js,script-update-interval=0

[MITM] 
hostname = api.revenuecat.com

var head = $request.headers;
var ua = head['User-Agent'];
var obj = JSON.parse($response.body);
if (ua.indexOf('Fileball') != -1) {
obj = {
  "request_date_ms" : 416505600000,
  "request_date" : "2099-12-31T00:00:00Z",
  "subscriber" : {
    "last_seen" : "2099-12-31T00:00:00Z",
    "first_seen" : "2099-12-31T00:00:00Z",
    "original_application_version" : "170",
    "other_purchases" : {
      "filebox_pro" : {
        "purchase_date" : "2099-12-31T00:00:00Z"
      }
    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {
      "filebox_pro" : {
        "expires_date" : null,
        "purchase_date" : "2099-12-31T00:00:00Z",
        "product_identifier" : "filebox_pro",
        "grace_period_expires_date" : null
      }
    },
    "original_purchase_date" : "2099-12-31T00:00:00Z",
    "original_app_user_id" : "$RCAnonymousID%110",
    "non_subscriptions" : {
      "filebox_pro" : [
        {
          "id" : "Epoch",
          "is_sandbox" : false,
          "purchase_date" : "2099-12-31T00:00:00Z",
          "original_purchase_date" : "2099-12-31T00:00:00Z",
          "store" : "app_store"
        }
      ]
    }
  }
}
}

$done({ body: JSON.stringify(obj) });
