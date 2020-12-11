Feature: drugs Module Feature

    @SPEC-Level2
    Scenario: Verify user can view Drugs Page
        Given user clicks on Menu button
        When user clicks on the Administration module in left hand side Pane
        Then User clicks on Drugs

    @SPEC-Level2
    Scenario: Verify column names in Drugs Page
        Given user in drugs page
        When user get column names from test data in drugs
        Then column names should match agaist application in drugs page

    @SPEC-Level2
    Scenario:Verify Details Page in Drugs Module
        Given user in drugs page
        When user clicks on one of the drug code
        Then drug details page displayed with specified header
        When user clicks drugs link
        Then user in drugs page

    #content type filter option start
    @SPEC-Level2
    Scenario:Verify Content type in Drugs Module
        Given user in drugs page
        When user clicks drug type filter
        Then user view all drug type
        When user clicks on one of drug type
        And user clicks on apply button of drug Type
        Then drug details displayed based on drug type
    @SPEC-Level2
    Scenario:Verify Deselect and Cancel of Content type in Drugs Module
        Given user in drugs page
        When user clicks drug type filter
        Then Header of Drug Types is "Drug Types"
        When user clicks on cancel button of drug Type
        Then drug details displayed based on drug type
        When user clicks drug type filter
        When user clicks on one of drug type
        And user clicks on apply button of drug Type

    #Search Box option start
    @SPEC-Level2
    Scenario:Verify Search Pannel in Drugs Module
        Given user in drugs page
        When user Enters "Otezla" into the searchbox of Drugs
        Then user should be able to see only otezla drug
        When user removes "Otezla" from the searchbox
        Then user should be able to see the all the records

    #Creation of New Record
    @SPEC-Level2
    Scenario:Verify the New Button
        Given user in drugs page
        When user clicks on New button
        Then user should se the Header as "Edit Drug"
        And user should be able to see the fileds for new Record

    @SPEC-Level2
    Scenario:Verify the cancel Button under New in Drugs
        Given user in drugs page
        And user clicks on cancel
        Then user should see the screen without any changes

    @SPEC-Level2
    Scenario:Verify Creating New Record
        Given user in drugs page
        When user clicks on New button
        When user enters Name in New of drugs
        And user enters Description in New of drugs
        And user selects drug type in New of drugs
        And user enters Drug code in New of drugs
        Then user clicks on save of New creation

    @SPEC-Level2
    Scenario: Verify Links Page to Home Page
        Given user clicks on menu clicks on home
        Then user is in home page