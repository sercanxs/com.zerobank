@as
Feature: Account summary page should have the title Zero – Account summary

  Scenario: Account summary page should have the title "Zero - Account Summary"
    Given the user is logged in
    When the user should be able lands on "as"
    Then this page should have the title "Zero - Account Summary"

  Scenario Outline: Account summary page should have to following account types
    Given the user is logged in
    When the user should be able lands on "as"
    Then Account summary page should have to following account types "<types>"

    Examples:
      | types               |
      | Cash Accounts       |
      | Investment Accounts |
      | Credit Accounts     |
      | Loan Accounts       |

  Scenario Outline: Credit Accounts table must have columns Account, Credit Card, Balance.
    Given the user is logged in
    And the user should be able lands on "as"
    Then the user should be able to see "<column>"
    Examples:
      | column     |
      | Account     |
      | Credit Card |
      | Balance     |






