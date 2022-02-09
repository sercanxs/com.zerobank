@aa
Feature: Account Activity page should have the title Zero - Account Activity

  Scenario: Account Activity page should have the title Zero - Account Activity
    Given the user is logged in
    When the user should be able lands on "aa"
    Then this page should have the title "Zero - Account Activity"

  Scenario: In the Account Dropdown default option should be savings.
    Given the user is logged in
    When the user should be able lands on "aa"
    Then  In the Account Dropdown default option should be "Savings"
@190
  Scenario: Account Dropdown should have the other options.
    Given the user is logged in
    When the user should be able lands on "aa"
    Then Account Dropdown should have all expected options.
      | Savings     |
      | Checking    |
      | Loan        |
      | Credit Card |
      | Brokerage   |

