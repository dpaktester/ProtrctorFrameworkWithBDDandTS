Feature: Phoenix Application Logout Feature

@SPEC-LOGOUT or @SPEC-Level2
Scenario: Checking Logout Functionality
    Given user is logged in to the Application 
    When user clicks on the Account Name Dropdown and clicks Logout
    Then user should be able to log out from the Phoenix Application.

@SPEC-SMOKE
Scenario: Checking Logout Functionality
    Given user is logged in to the Application 
    When user clicks on the Account Name Dropdown and clicks Logout
    Then user should be able to log out from the Phoenix Application.


