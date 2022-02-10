@aan
Feature: Navigating	to specific	accounts in	Accounts Activity

  Scenario Outline: <selection> account redirect
    Given the user is logged in
    When the user should be able lands on "as"
    And Click the "<selection>"
    Then this page should have the title "Zero - Account Activity"
    And first selected option must be "<selection>"

    Examples:
      | selection   |
      | Credit Card |
      | Savings     |
      | Brokerage   |
      | Checking    |
      | Credit Card |
      | Loan        |
