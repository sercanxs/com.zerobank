$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/New%20Payee.feature");
formatter.feature({
  "name": "Add new payee under pay bills",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add a new payee",
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
  "name": "click the \"Add New Payee\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter new payee information \"\u003cPayeeName\u003e\"\"\u003cPayeeAddress\u003e\"\"\u003cAccount\u003e\"\"\u003cPayeeDetails\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "message The new payee \"\u003cPayeeName\u003e\" was succesfully created. should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "PayeeName",
        "PayeeAddress",
        "Account",
        "PayeeDetails"
      ]
    },
    {
      "cells": [
        "The Law Offices of Hyde, Price \u0026amp; Scharks",
        "100 Same st, Anytown, USA, 10001",
        "Checking",
        "XYZ account"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add a new payee",
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
  "name": "click the \"Add New Payee\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter new payee information \"The Law Offices of Hyde, Price \u0026amp; Scharks\"\"100 Same st, Anytown, USA, 10001\"\"Checking\"\"XYZ account\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.enter_new_payee_information(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message The new payee \"The Law Offices of Hyde, Price \u0026amp; Scharks\" was succesfully created. should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.message_The_new_payee_was_succesfully_created_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});