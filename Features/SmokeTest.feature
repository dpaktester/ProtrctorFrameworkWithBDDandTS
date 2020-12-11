Feature: Smoke Test Feature



@SPEC-SMOKE
Scenario: Verify user can view Organizations Page 
    Given user is on Home Page
    When user clicks on the Organizations module in left hand side Pane
    Then user is in Organization Page

@SPEC-SMOKE
Scenario: Verify user can view Plans Page
    Given user clicks on Menu button 
    When user clicks on the Plans module in left hand side Pane
    Then user is in Plans Page

@SPEC-SMOKE
Scenario:  Verify user can view Products Page
Given user clicks on Menu button 
When user clicks on the Products module in left hand side Pane
Then user is in Products Page

@SPEC-SMOKE
Scenario:  Verify user can view Formularies Page
Given user clicks on Menu button 
When user clicks on the Formualaries module in left hand side Pane
Then user is in Formularies Page

@SPEC-SMOKE
Scenario:  Verify user can view Coverage Policies Page
Given user clicks on Menu button 
When user clicks on the Coverage Policies module in left hand side Pane
Then user is in Coverage policies Page

@SPEC-SMOKE
Scenario:  Verify user can view Administration Page   
Given user clicks on Menu button 
When user clicks on the Administration module in left hand side Pane
Then user is in Administration Page

@SPEC-SMOKE
Scenario: Verify user can view Agents Page
Given user clicks on Menu button
When user clicks on the Administration module in left hand side Pane
Then user clicks on Agents
Then user is on Agents Page


@SPEC-SMOKE
Scenario: Verify user can view Channels Page
Given user clicks on Menu button
When user clicks on the Administration module in left hand side Pane
Then user clicks on Channels
Then user is in Channels Page

@SPEC-SMOKE
Scenario: Verify user can view Documents Page
Given user clicks on Menu button
When user clicks on the Administration module in left hand side Pane
Then user clicks on Documents
Then user is in Documents Page

@SPEC-SMOKE
Scenario: Verify user can view Links Page
Given user clicks on Menu button
When user clicks on the Administration module in left hand side Pane
Then user clicks on Links
Then user is in Links Page

@SPEC-SMOKE
Scenario: Verify user can view Drugs Page
Given user clicks on Menu button
When user clicks on the Administration module in left hand side Pane
Then User clicks on Drugs
Then user is in Drugs Page

@SPEC-SMOKE
Scenario: Verify user can view Version Page

Given user clicks on Menu button
When user clicks on the Administration module in left hand side Pane
Then user clicks on App Version 
Then User is in App version Page




