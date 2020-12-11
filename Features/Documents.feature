Feature: Documnets Module Features

    @SPEC-Level2
    Scenario: Verify user can view Documents Page
        Given user clicks on Menu button
        When user clicks on the Administration module in left hand side Pane
        And user clicks on Documents
        Then user is in Documents Page


    @SPEC-Level2
    Scenario: Verify column names in Documents Page
        Given user in Document page
        When user get column names from test data
        Then column names should match agaist application in documents page

    @SPEC-Level2
    Scenario:Verify Details Page in Document Module
        Given user in Document page
        When user clicks on one of the documnet code
        Then document details page displayed with specified header
        When user clicks document link
        Then user in Document page

#content type filter option start
    @SPEC-Level2
    Scenario:Verify Content type in Document Module
        Given user in Document page
        When user clicks Content type filter
        Then user view all Content type
        And user clicks on one of Content type
        And user clicks on apply button of content Type
        Then document details displayed based on Content type
    
    @SPEC-Level2
    Scenario:Verify Content type in Document Module for ALL
        Given user in Document page
        When user clicks Content type filter
        Then user view all Content type
        And user deselect on selected Content type
        And user clicks on apply button of content Type
        Then document details displayed for all Content type

    
    @SPEC-Level2
    Scenario:Verify Content type in Document Module for cancel
        Given user in Document page
        When user clicks Content type filter
        Then user view all Content type
        And user clicks on one of Content type
        And user clicks on apply button of content Type
        Then document details displayed for all Content type

#content type filter option end
#Status type filter option start
    @SPEC-Level2
    Scenario:Verify Status type in Document Module
        Given user in Document page
        When user clicks Record Status filter
        Then user view all Record Status
        And user clicks on one of Record Status in Documents
        And user clicks on apply button of Record Status
        Then document details displayed based on Record Status
    
    @SPEC-Level2
    Scenario:Verify Status type in Document Module for ALL
        Given user in Document page
        When user clicks Status type filter
        Then user view all Content type
        And user deselect on selected Record Status in Documents
        And user clicks on apply button of Record Status
        Then document details displayed for all Record Status after cancellation

    
    @SPEC-Level2
    Scenario:Verify Status type in Document Module for cancel
        Given user in Document page
        When user clicks Record Status filter
        Then user clicks on one of Record Status in Documents
        And user clicks on cancel button of Record Status
        Then document details displayed for all Record Status
#Record Status filter option end
