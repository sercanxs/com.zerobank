$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/PurchaseForeignCurrency.feature");
formatter.feature({
  "name": "Purchase foreign currency",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Error message for not selecting currency",
  "description": "",
  "keyword": "Scenario",
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
  "name": "click the pay",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the_pay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed for not selecting currency",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.error_message_should_be_displayed_for_not_selecting_currency()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});