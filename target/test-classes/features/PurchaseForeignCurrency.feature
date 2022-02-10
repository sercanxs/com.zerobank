Feature: Purchase foreign currency


  Scenario: Available currencies
    Given the user is logged in
    And the user should be able lands on "pb"
    And click the "Purchase Foreign Currency"
    Then following curriencies should be avaliable
      | Australia (dollar)    |
      | Canada (dollar)       |
      | Switzerland (franc)   |
      | China (yuan)          |
      | Denmark (krone)       |
      | Eurozone (euro)       |
      | Great Britain (pound) |
      | Hong Kong (dollar)    |
      | Japan (yen)           |
      | Mexico (peso)         |
      | Norway (krone)        |
      | New Zealand (dollar)  |
      | Sweden (krona)        |
      | Singapore (dollar)    |
      | Thailand (baht)       |

  @190
  Scenario Outline: Error message for not selecting <currency>
    Given the user is logged in
    And the user should be able lands on "pb"
    And click the "Purchase Foreign Currency"
    When click the purchase with "<amount>"
    Then error message should be displayed for not selecting input

    Examples:
      | currency | amount   |
      | currency | amount   |
      | amount   | currency |
