$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/PurchaseForeignCurrency.feature");
formatter.feature({
  "name": "Purchase foreign currency",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Error message for not selecting \u003ccurrency\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@190"
    }
  ]
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should be able lands on \"pb\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the \"Purchase Foreign Currency\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the purchase with \"\u003camount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "error message should be displayed for not selecting input",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currency",
        "amount"
      ]
    },
    {
      "cells": [
        "currency",
        "amount"
      ]
    },
    {
      "cells": [
        "amount",
        "currency"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Error message for not selecting currency",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@190"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able lands on \"pb\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Purchase Foreign Currency\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the purchase with \"amount\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the_purchase_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed for not selecting input",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.error_message_should_be_displayed_for_not_selecting_input()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not selecting amount",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@190"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able lands on \"pb\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Purchase Foreign Currency\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the purchase with \"currency\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the_purchase_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed for not selecting input",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.error_message_should_be_displayed_for_not_selecting_input()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});