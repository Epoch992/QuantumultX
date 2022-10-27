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
