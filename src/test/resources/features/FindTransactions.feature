@ft @smoke
Feature: Find Transactions in Account Activity

  Scenario Outline: Search Date Range
    Given the user is logged in
    When the user should be able lands on "aa"
    And click the "Find Transactions"
    And the user enters data range from "<date1>" to "<date2>"
    And click the "Find"
    Then the results should be sorted from most recent date "<date2>" to oldest date "<date1>"
    When delete the current date1 and date2
    When the user enters data range from "2012-09-02" to "<date2>"
    And click the "Find"
    Then the results should be sorted from most recent date "<date2>" to oldest date "2012-09-02"

    Examples:
      | date1      | date2      |
      | 2012-09-01 | 2012-09-06 |


  Scenario Outline: Search Description
    Given the user is logged in
    And the user should be able lands on "aa"
    When click the "Find Transactions"
    And the user enters description "<description>"
    And click the "Find"
    Then the results should only show descripotions containing "<description>" but not "<description2>"
    When the user enters description "<description2>"
    And click the "Find"
    Then the results should only show descripotions containing "<description2>" but not "<description>"

    Examples:
      | description | description2 |
      | ONLINE      | OFFICE       |

  Scenario Outline: Search Description is case sensitive
    Given the user is logged in
    And the user should be able lands on "aa"
    When click the "Find Transactions"
    And the user enters description "<description>"
    And click the "Find"
    Then the results should only show descripotions containing "<description>" but not "<description2>"

    Examples:
      | description | description2 |
      | ONLINE      | online       |


  Scenario Outline: Type
    Given the user is logged in
    And the user should be able lands on "aa"
    And click the "Find Transactions"
    And click the "Find"
    Then results table should show at least 1 result "<type1>"
    Then results table should show at least 1 result "<type2>"
    When select for type "<type1>"
    And click the "Find"
    Then results table should show at least 1 result "<type1>"
    But results table should'nt show "<type2>"
    When select for type "<type2>"
    And click the "Find"
    Then results table should show at least 1 result "<type2>"
    But results table should'nt show "<type1>"


    Examples:
      | type1   | type2      |
      | Deposit | Withdrawal |
