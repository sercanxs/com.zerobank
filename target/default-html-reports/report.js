$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating\tto specific\taccounts in\tAccounts Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@aan"
    },
    {
      "name": "@smoke"
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
  "name": "click the \"\u003cselection\u003e\"",
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
      "name": "@aan"
    },
    {
      "name": "@smoke"
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
  "name": "click the \"Credit Card\"",
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
      "name": "@aan"
    },
    {
      "name": "@smoke"
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
  "name": "click the \"Savings\"",
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
      "name": "@aan"
    },
    {
      "name": "@smoke"
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
  "name": "click the \"Brokerage\"",
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
      "name": "@aan"
    },
    {
      "name": "@smoke"
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
  "name": "click the \"Checking\"",
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
      "name": "@aan"
    },
    {
      "name": "@smoke"
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
  "name": "click the \"Credit Card\"",
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
      "name": "@aan"
    },
    {
      "name": "@smoke"
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
  "name": "click the \"Loan\"",
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
formatter.uri("file:src/test/resources/features/FindTransactions.feature");
formatter.feature({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ft"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Search Date Range",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should be able lands on \"aa\"",
  "keyword": "When "
});
formatter.step({
  "name": "click the \"Find Transactions\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters data range from \"\u003cdate1\u003e\" to \"\u003cdate2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.step({
  "name": "the results should be sorted from most recent date \"\u003cdate2\u003e\" to oldest date \"\u003cdate1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "delete the current date1 and date2",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters data range from \"2012-09-02\" to \"\u003cdate2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.step({
  "name": "the results should be sorted from most recent date \"\u003cdate2\u003e\" to oldest date \"2012-09-02\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "date1",
        "date2"
      ]
    },
    {
      "cells": [
        "2012-09-01",
        "2012-09-06"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Date Range",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ft"
    },
    {
      "name": "@smoke"
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
  "name": "the user should be able lands on \"aa\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find Transactions\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters data range from \"2012-09-01\" to \"2012-09-06\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_enters_data_range_from_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results should be sorted from most recent date \"2012-09-06\" to oldest date \"2012-09-01\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_results_should_be_sorted_from_most_recent_date_to_oldest_date(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "delete the current date1 and date2",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.delete_the_current_date1_and_date2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters data range from \"2012-09-02\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_enters_data_range_from_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results should be sorted from most recent date \"2012-09-06\" to oldest date \"2012-09-02\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_results_should_be_sorted_from_most_recent_date_to_oldest_date(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search Description",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should be able lands on \"aa\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the \"Find Transactions\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters description \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.step({
  "name": "the results should only show descripotions containing \"\u003cdescription\u003e\" but not \"\u003cdescription2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the user enters description \"\u003cdescription2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.step({
  "name": "the results should only show descripotions containing \"\u003cdescription2\u003e\" but not \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "description",
        "description2"
      ]
    },
    {
      "cells": [
        "ONLINE",
        "OFFICE"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ft"
    },
    {
      "name": "@smoke"
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
  "name": "the user should be able lands on \"aa\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find Transactions\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results should only show descripotions containing \"ONLINE\" but not \"OFFICE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_results_should_only_show_descripotions_containing_but_not(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"OFFICE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results should only show descripotions containing \"OFFICE\" but not \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_results_should_only_show_descripotions_containing_but_not(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search Description is case sensitive",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should be able lands on \"aa\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the \"Find Transactions\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters description \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.step({
  "name": "the results should only show descripotions containing \"\u003cdescription\u003e\" but not \"\u003cdescription2\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "description",
        "description2"
      ]
    },
    {
      "cells": [
        "ONLINE",
        "online"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Description is case sensitive",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ft"
    },
    {
      "name": "@smoke"
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
  "name": "the user should be able lands on \"aa\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find Transactions\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results should only show descripotions containing \"ONLINE\" but not \"online\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_results_should_only_show_descripotions_containing_but_not(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Type",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should be able lands on \"aa\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the \"Find Transactions\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.step({
  "name": "results table should show at least 1 result \"\u003ctype1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "results table should show at least 1 result \"\u003ctype2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "select for type \"\u003ctype1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.step({
  "name": "results table should show at least 1 result \"\u003ctype1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "results table should\u0027nt show \"\u003ctype2\u003e\"",
  "keyword": "But "
});
formatter.step({
  "name": "select for type \"\u003ctype2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.step({
  "name": "results table should show at least 1 result \"\u003ctype2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "results table should\u0027nt show \"\u003ctype1\u003e\"",
  "keyword": "But "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "type1",
        "type2"
      ]
    },
    {
      "cells": [
        "Deposit",
        "Withdrawal"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Type",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ft"
    },
    {
      "name": "@smoke"
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
  "name": "the user should be able lands on \"aa\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find Transactions\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least 1 result \"Deposit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.results_table_should_show_at_least_result(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least 1 result \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.results_table_should_show_at_least_result(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select for type \"Deposit\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.select_for_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least 1 result \"Deposit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.results_table_should_show_at_least_result(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should\u0027nt show \"Withdrawal\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.results_table_should_nt_show(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select for type \"Withdrawal\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.select_for_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \"Find\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.click_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least 1 result \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.results_table_should_show_at_least_result(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should\u0027nt show \"Deposit\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.results_table_should_nt_show(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/New%20Payee.feature");
formatter.feature({
  "name": "Add new payee under pay bills",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@np"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add a new payee",
  "description": "",
  "keyword": "Scenario Outline"
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
      "name": "@np"
    },
    {
      "name": "@smoke"
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
formatter.uri("file:src/test/resources/features/PurchaseForeignCurrency.feature");
formatter.feature({
  "name": "Purchase foreign currency",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@pfn"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Available currencies",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pfn"
    },
    {
      "name": "@smoke"
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
  "name": "following curriencies should be avaliable",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.following_curriencies_should_be_avaliable(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Error message for not selecting \u003ccurrency\u003e",
  "description": "",
  "keyword": "Scenario Outline"
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
      "name": "@pfn"
    },
    {
      "name": "@smoke"
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
      "name": "@pfn"
    },
    {
      "name": "@smoke"
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
formatter.uri("file:src/test/resources/features/accountActivity.feature");
formatter.feature({
  "name": "Account Activity page should have the title Zero - Account Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@aa"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Account Activity page should have the title Zero - Account Activity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@aa"
    },
    {
      "name": "@smoke"
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
  "name": "the user should be able lands on \"aa\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "In the Account Dropdown default option should be savings.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@aa"
    },
    {
      "name": "@smoke"
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
  "name": "the user should be able lands on \"aa\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In the Account Dropdown default option should be \"Savings\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.in_the_Account_Dropdown_default_option_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Dropdown should have the other options.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@aa"
    },
    {
      "name": "@smoke"
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
  "name": "the user should be able lands on \"aa\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account Dropdown should have all expected options.",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.account_Dropdown_should_have_all_expected_options(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Transaction Table should have following column names",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@aa"
    },
    {
      "name": "@smoke"
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
  "name": "the user should be able lands on \"aa\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transaction Table should have following column names",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.transaction_Table_should_have_following_column_names(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/accountSummary.feature");
formatter.feature({
  "name": "Account summary page should have the title Zero – Account summary",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@as"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Account summary page should have the title \"Zero - Account Summary\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@as"
    },
    {
      "name": "@smoke"
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
  "name": "this page should have the title \"Zero - Account Summary\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.this_page_should_have_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Account summary page should have to following account types",
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
  "name": "Account summary page should have to following account types \"\u003ctypes\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "types"
      ]
    },
    {
      "cells": [
        "Cash Accounts"
      ]
    },
    {
      "cells": [
        "Investment Accounts"
      ]
    },
    {
      "cells": [
        "Credit Accounts"
      ]
    },
    {
      "cells": [
        "Loan Accounts"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Account summary page should have to following account types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@as"
    },
    {
      "name": "@smoke"
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
  "name": "Account summary page should have to following account types \"Cash Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.account_summary_page_should_have_to_following_account_types(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account summary page should have to following account types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@as"
    },
    {
      "name": "@smoke"
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
  "name": "Account summary page should have to following account types \"Investment Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.account_summary_page_should_have_to_following_account_types(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account summary page should have to following account types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@as"
    },
    {
      "name": "@smoke"
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
  "name": "Account summary page should have to following account types \"Credit Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.account_summary_page_should_have_to_following_account_types(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account summary page should have to following account types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@as"
    },
    {
      "name": "@smoke"
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
  "name": "Account summary page should have to following account types \"Loan Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.account_summary_page_should_have_to_following_account_types(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Credit Accounts table must have columns Account, Credit Card, Balance.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should be able lands on \"as\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user should be able to see \"\u003ccolumn\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "column"
      ]
    },
    {
      "cells": [
        "Account"
      ]
    },
    {
      "cells": [
        "Credit Card"
      ]
    },
    {
      "cells": [
        "Balance"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Credit Accounts table must have columns Account, Credit Card, Balance.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@as"
    },
    {
      "name": "@smoke"
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
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see \"Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_to_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit Accounts table must have columns Account, Credit Card, Balance.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@as"
    },
    {
      "name": "@smoke"
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
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see \"Credit Card\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_to_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit Accounts table must have columns Account, Credit Card, Balance.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@as"
    },
    {
      "name": "@smoke"
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
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_lands_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see \"Balance\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.the_user_should_be_able_to_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Users should be able to login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login as \u003cuserType\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters the \"\u003cusername\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType",
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Valid",
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Invalid",
        "reow",
        "ruana"
      ]
    },
    {
      "cells": [
        "Blank",
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login as Valid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"username\" \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_enters_the(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as Invalid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"reow\" \"ruana\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_enters_the(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as Blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"\" \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_enters_the(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/payBills.feature");
formatter.feature({
  "name": "Pay Bills page should have the following requirements",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@pb"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Pay Bills page should have the title \"Zero - Pay Bills\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pb"
    },
    {
      "name": "@smoke"
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
  "name": "this page should have the title \"Zero - Pay Bills\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.this_page_should_have_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should able to complete pay operation",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "user should able to get this message \"\u003cmessage\u003e\"",
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
        "100",
        "1",
        "The payment was successfully submitted."
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should able to complete pay operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pb"
    },
    {
      "name": "@smoke"
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
  "name": "User should able to complete pay operation \"100\" \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.user_should_able_to_complete_pay_operation(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to get this message \"The payment was successfully submitted.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.user_should_able_to_get_this_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should\u0027nt able to complete pay operation with no inputs",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "user should able to get this failed message \"\u003cmessage\u003e\"",
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
        "",
        "",
        "Please fill out this field."
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should\u0027nt able to complete pay operation with no inputs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pb"
    },
    {
      "name": "@smoke"
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
  "name": "User should able to complete pay operation \"\" \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.user_should_able_to_complete_pay_operation(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to get this failed message \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AboutOnlineBanking.user_should_able_to_get_this_failed_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Date field should\u0027nt accept Alphabetic or Special Character",
  "description": "",
  "keyword": "Scenario Outline"
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
      "name": "@pb"
    },
    {
      "name": "@smoke"
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
      "name": "@pb"
    },
    {
      "name": "@smoke"
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