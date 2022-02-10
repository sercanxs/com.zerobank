Feature: Purchase foreign currency
@190
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
      | Japan (yen)           |
      | Mexico (peso)         |
      | Norway (krone)        |
      | New	Zealand (dollar)  |
      | Singapore (dollar)    |