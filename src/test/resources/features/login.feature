Feature: Users should be able to login

  Scenario Outline: Login as <username>
    Given the user is on the login page
    When the user enters the <username> <password>
    Then the user should be able to login

    Examples:
      | username | password |