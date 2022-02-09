$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/accountActivity.feature");
formatter.feature({
  "name": "Account Activity page should have the title Zero - Account Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@aa"
    }
  ]
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
});