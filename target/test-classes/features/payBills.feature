@pb
Feature: Pay Bills page should have the following requirements

  Scenario: Pay Bills page should have the title "Zero - Pay Bills"
    Given the user is logged in
    When the user should be able lands on "pb"
    Then this page should have the title "Zero - Pay Bills"

  Scenario Outline: User should able to complete pay operation
    Given the user is logged in
    When the user should be able lands on "pb"
    And User should able to complete pay operation "<amount>" "<date>"
    Then user should able to get this message "<message>"
    Examples:
      | amount | date | message                                 |
      | 100    | 1    | The payment was successfully submitted. |

  Scenario Outline: User should'nt able to complete pay operation with no inputs
    Given the user is logged in
    When the user should be able lands on "pb"
    And User should able to complete pay operation "<amount>" "<date>"
    Then user should able to get this failed message "<message>"


    Examples:
      | amount | date | message                     |
      |        |      | Please fill out this field. |


  Scenario Outline: Date field should'nt accept Alphabetic or Special Character
    Given the user is logged in
    When the user should be able lands on "pb"
    And User should able to complete pay operation "<amount>" "<date>"
    Then User should able to get failed message for datainput "<message>"



    Examples:
      | amount | date | message                     |
      | 80     | <_   | Please fill out this field. |
      | 100    | AA   | Please fill out this field. |



