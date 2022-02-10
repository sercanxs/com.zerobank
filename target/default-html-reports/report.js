$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/payBills.feature");
formatter.feature({
  "name": "Pay Bills page should have the following requirements",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@191"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Date field should\u0027nt accept Alphabetic or Special Character",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@192"
    }
  ]
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should be able lands on \"pb\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should able to complete pay operation \"\u003camount\u003e\" \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should able to get failed message for datainput \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "amount",
        "date",
        "message"
      ]
    },
    {
      "cells": [
        "80",
        "\u003c_",
        "Please fill out this field."
      ]
    },
    {
      "cells": [
        "100",
        "AA",
        "Please fill out this field."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Date field should\u0027nt accept Alphabetic or Special Character",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@191"
    },
    {
      "name": "@192"
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
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to complete pay operation \"80\" \"\u003c_\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.user_should_able_to_complete_pay_operation(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to get failed message for datainput \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.user_should_able_to_get_failed_message_for_datainput(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Date field should\u0027nt accept Alphabetic or Special Character",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@191"
    },
    {
      "name": "@192"
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
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to complete pay operation \"100\" \"AA\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.user_should_able_to_complete_pay_operation(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to get failed message for datainput \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.user_should_able_to_get_failed_message_for_datainput(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});