$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating\tto specific\taccounts in\tAccounts Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@190"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003cselection\u003e account redirect",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should be able lands on \"as\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the \"\u003cselection\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "this page should have the title \"Zero - Account Activity\"",
  "keyword": "Then "
});
formatter.step({
  "name": "first selected option must be \"\u003cselection\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "selection"
      ]
    },
    {
      "cells": [
        "Credit Card"
      ]
    },
    {
      "cells": [
        "Savings"
      ]
    },
    {
      "cells": [
        "Brokerage"
      ]
    },
    {
      "cells": [
        "Checking"
      ]
    },
    {
      "cells": [
        "Credit Card"
      ]
    },
    {
      "cells": [
        "Loan"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Credit Card account redirect",
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
  "name": "the user should be able lands on \"as\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the \"Credit Card\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this page should have the title \"Zero - Account Activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.this_page_should_have_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first selected option must be \"Credit Card\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.first_selected_option_must_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Savings account redirect",
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
  "name": "the user should be able lands on \"as\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the \"Savings\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this page should have the title \"Zero - Account Activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.this_page_should_have_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first selected option must be \"Savings\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.first_selected_option_must_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Brokerage account redirect",
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
  "name": "the user should be able lands on \"as\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the \"Brokerage\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this page should have the title \"Zero - Account Activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.this_page_should_have_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first selected option must be \"Brokerage\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.first_selected_option_must_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking account redirect",
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
  "name": "the user should be able lands on \"as\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the \"Checking\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this page should have the title \"Zero - Account Activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.this_page_should_have_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first selected option must be \"Checking\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.first_selected_option_must_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit Card account redirect",
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
  "name": "the user should be able lands on \"as\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the \"Credit Card\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this page should have the title \"Zero - Account Activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.this_page_should_have_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first selected option must be \"Credit Card\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.first_selected_option_must_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Loan account redirect",
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
  "name": "the user should be able lands on \"as\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the \"Loan\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this page should have the title \"Zero - Account Activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.this_page_should_have_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first selected option must be \"Loan\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.first_selected_option_must_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});