@190
Feature: Find Transations in Account Activity

  Scenario Outline: Search Date Range
    Given the user is logged in
    When the user should be able lands on "aa"
    And click the "Find Transactions"
    And the user enters data range from "<date1>" to "<date2>"
    And click the "Find"
    Then the results should be sorted from most recent date "<date2>" to oldest date "<date1>"




    Examples:
      | date1      | date2      |
      | 2012-09-01 | 2012-09-06 |