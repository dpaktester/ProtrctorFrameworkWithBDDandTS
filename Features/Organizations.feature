Feature: Organizations Module Feature

    @SPEC-Level2
    Scenario: Verify user can view Organizations Page
        Given user is on Home Page
        When user clicks on the Organizations module in left hand side Pane
        Then user is in Organization Page

    @SPEC-Level2
    Scenario: Verify Column names in  Organizations Page
        Given user is on Organization Page
        When user validate column names with specified column names dataset
        Then column names should match for organization grid

    @SPEC-Level2
    Scenario: Verify  Organizations Types  Filter
        Given user is on Organization Page
        When user click on Organization type Filter
        Then Number of organization types are displayed


    @SPEC-Level2
    Scenario: Verify  Organizations Types  Filter apply function
        Given user is on Organization Type filter
        When user selects given Organization type Filter and click on apply button
        Then grid is displayed with selected organization type filter


    @SPEC-Level2
    Scenario: Verify  Organizations Types  Filter defualt function
        Given user is on Organization Page
        When user click on Organization type Filter for deslect operation
        And user deselects selected given Organization type Filter and click on apply button
        Then grid is displayed with default values


    @SPEC-Level2
    Scenario: Verify  Organizations Status  Filter
        Given user is on Organization Page
        When user click on Organization Status Filter
        Then Number of organization Status are displayed

    @SPEC-Level2
    Scenario: Verify  Organizations Status  Filter apply function
        Given user is on Organization Status filter
        When user selects given Organization Status Filter and click on apply button
        Then grid is displayed with selected organization Status filter


    @SPEC-Level2
    Scenario: Verify  Organizations Status  Filter defualt function
        Given user is on Organization Page
        When user click on Organization Status Filter for deslect operation
        And user deselects selected given Organization Status Filter and click on apply button
        Then grid is displayed with default values of Organization Status

    @SPEC-Level2
    Scenario: Verify  Detail Page for Organization
        Given user is on Organization Page
        When user click on one of the Organization
        Then user view the detail page of Organization


    @SPEC-Level2
    Scenario: Verify  Detail Page TABS Organization
        Given user is on detail Organization Page
        When user get tab names and compare with given test data
        Then user should view all give tab names


    @SPEC-Level2
    Scenario: Verify  Paln TAB in Organization
        Given user is on detail Organization Page
        When when user clicks on Plan TAB
        Then user should view all given column names in Plan Page
        Then go to overview TAB

    @SPEC-Level2
    Scenario: Verify Formularies TAB in Organization
        Given user is on detail Organization Page
        When when user clicks on  Formularies  TAB
        Then user should view all given column names  in  Formularies  Page
        Then go to overview TAB

    @SPEC-Level2
    Scenario: Verify  Coverage Policies  TAB in Organization
        Given user is on detail Organization Page
        When when user clicks on   Coverage Policies   TAB
        Then user should view all given column names  in   Coverage Policies   Page
        Then go to overview TAB

    @SPEC-Level2
    Scenario: Verify Documents  TAB in Organization
        Given user is on detail Organization Page
        When when user clicks on Documents TAB
        Then user should view all given column names  in Documents Page
        Then go to overview TAB

    @SPEC-Level2
    Scenario: Verify Link  TAB in Organization
        Given user is on detail Organization Page
        When when user clicks on Link TAB
        Then user should view all given column names  in Links Page
        Then go to overview TAB

    #@SPEC-Level3
    #Scenario: Verify  New Paln creation in Organization
    #Given user is on plan TAB
    #When when user clicks on New
    #Then user view New Plan Create Page
    #When user enters all details and Click on save
    #Then New Plan is created in Organization
    # @SPEC-Level2
    #Scenario: Verify Organization edit operation
    #Given user is on detail Organization Page
    #When when user clicks edit button
    #Then user lands on edit page
    #When user enters description and click on save
    #Then organization is modified with record status as modified

    @SPEC-Level2
    Scenario: Verify Navigation from Detail Page to main Grid Page
        Given user is on detail Organization Page
        When user click on Organizations Link
        Then user lands to Organization Main Page

    @SPEC-Level2
    Scenario: Verify New Organization Creation
        Given user is on Organization Page
        When user clicks on NEW button
        Then user lands on New Organization Page
        When user enetrs details and click on save button
        Then new organization  is created


    @SPEC-Level2
    Scenario: Verify Organization edit operation
        Given user is in detail Organization Page
        When user clicks edit button
        Then user lands on edit page
        When user enters description and click on save
        Then organization is modified with record status as modified
        When user click on complete button in organization detail page
        Then user verifies exsistance of continue button
        When user clicks on continue button
        Then user verifies exsistance of Approve or Reject button
        When user click on Approve button
        Then organization is modified with record status as Approved

    @SPEC-Level2
    Scenario: Verify History TAB
        Given user is in detail Organization Page
        When user click on History TABS
        Then user view histroy TAB  with details of organization record changes
        #Then user navigate to organization main page


    @SPEC-Level2
    Scenario: Verify navigtation Oragnization page to Home Page
        Given user is in detail Organization Page
        When user clicks on menu clicks on home
        Then user is in home page