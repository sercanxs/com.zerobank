@np @smoke
Feature: Add new payee under pay bills


  Scenario Outline: Add a new payee
    Given the user is logged in
    And the user should be able lands on "pb"
    And click the "Add New Payee"
    When enter new payee information "<PayeeName>""<PayeeAddress>""<Account>""<PayeeDetails>"
    Then message The new payee "<PayeeName>" was succesfully created. should be displayed


    Examples:
      | PayeeName                                    | PayeeAddress                     | Account  | PayeeDetails |
      | The Law Offices of Hyde, Price &amp; Scharks | 100 Same st, Anytown, USA, 10001 | Checking | XYZ account  |
