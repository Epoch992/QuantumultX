/***
目标地图永久会员
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID.+$) url script-response-body https://raw.githubusercontent.com/Epoch992/QuantumultX/QX/Script/mbdt.js
hostname = api.revenuecat.com
***/
var body = JSON.parse($response.body);
var obj = 
  {
  "request_date_ms" : 1663814579010,
  "request_date" : "2022-09-22T02:42:59Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-09-22T02:42:31Z",
    "original_application_version" : "322",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.happydogteam.relax.lifetimePro" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : null,
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-09-22T02:42:31Z",
        "original_purchase_date" : "2022-09-22T02:42:31Z",
        "purchase_date" : "2022-09-22T02:42:31Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-09-22T02:42:31Z",
        "product_identifier" : "com.happydogteam.relax.lifetimePro",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "2022-09-22T02:42:31Z",
    "original_app_user_id" : "$RCAnonymousID:d7d6fd51746344dd83d5c1f4c433acff",
    "last_seen" : "2022-09-22T02:12:43Z"
  }
}
$done({ body: JSON.stringify(obj) });
