/***
熊掌记
[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/xzj.js

[mitm] 

hostname = buy.itunes.apple.com

***/
var body = JSON.parse($response.body);
var obj = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1016366447,
    "receipt_creation_date" : "2022-09-14 02:48:29 Etc/GMT",
    "bundle_id" : "net.shinyfrog.bear-iOS",
    "original_purchase_date" : "2020-07-06 01:50:15 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1594000422000",
        "expires_date" : "2099-12-31 23:59:59 Etc/GMT",
        "expires_date_pst" : "2099-12-31 23:59:59 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430000659572416",
        "is_trial_period" : "true",
        "original_transaction_id" : "430000659572416",
        "purchase_date" : "2020-07-06 01:53:42 Etc/GMT",
        "product_id" : "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
        "original_purchase_date_pst" : "2020-07-05 18:53:43 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1594000423000",
        "web_order_line_item_id" : "430000254060883",
        "expires_date_ms" : "1596678822000",
        "purchase_date_pst" : "2020-07-05 18:53:42 America/Los_Angeles",
        "original_purchase_date" : "2020-07-06 01:53:43 Etc/GMT"
      }
    ],
    "adam_id" : 1016366447,
    "receipt_creation_date_pst" : "2022-09-13 19:48:29 America/Los_Angeles",
    "request_date" : "2022-09-14 02:50:50 Etc/GMT",
    "request_date_pst" : "2022-09-13 19:50:50 America/Los_Angeles",
    "version_external_identifier" : 848214815,
    "request_date_ms" : "1663123850720",
    "original_purchase_date_pst" : "2020-07-05 18:50:15 America/Los_Angeles",
    "application_version" : "9048",
    "original_purchase_date_ms" : "1594000215000",
    "receipt_creation_date_ms" : "1663123709000",
    "original_application_version" : "8457",
    "download_id" : 83067705285576
  },
  "pending_renewal_info" : [
    {
      "expiration_intent" : "1",
      "product_id" : "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
      "is_in_billing_retry_period" : "0",
      "auto_renew_product_id" : "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
      "original_transaction_id" : "430000659572416",
      "auto_renew_status" : "0"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1594000422000",
      "expires_date" : "2099-12-31 23:59:59 Etc/GMT",
      "expires_date_pst" : "2099-12-31 23:59:59 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430000659572416",
      "is_trial_period" : "true",
      "original_transaction_id" : "430000659572416",
      "purchase_date" : "2020-07-06 01:53:42 Etc/GMT",
      "product_id" : "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
      "original_purchase_date_pst" : "2020-07-05 18:53:43 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20354566",
      "original_purchase_date_ms" : "1594000423000",
      "web_order_line_item_id" : "430000254060883",
      "expires_date_ms" : "9996678822000",
      "purchase_date_pst" : "2020-07-05 18:53:42 America/Los_Angeles",
      "original_purchase_date" : "2020-07-06 01:53:43 Etc/GMT"
    }
  ],
  "latest_receipt" : ""
}
$done({ body: JSON.stringify(obj) });
