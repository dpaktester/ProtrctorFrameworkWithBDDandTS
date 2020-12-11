Feature: Plans Module Feature

    @SPEC-Level1 or @SPEC-Level2
    Scenario: Verify user can view Plans Page
        Given user clicks on Menu button 
        When user clicks on the Plans module in left hand side Pane
        Then user is in Plans Page

    @SPEC-Level2
    Scenario: Verify column names in plans Page
        Given user landed in plans page
        Then column names should match against requirement in plans page
    

    @SPEC-Level2
    Scenario: Verify Serach Pannel in plans Page
        Given user landed in plans page
        When user enters "Aetna" in search box
        Then Plan name should only show the plans as per searched criteria
        When user clears the Search Field in plans
        Then the page should display the data as per the selection

     @SPEC-Level2
    Scenario: Verify Recoord Status filter and cancel button in plans Page
        Given user landed in plans page
        When user clicks on Record Status Filter in plans
        And the header of Record Status should be "Record Status" inside plans
        Then data in Record status should match against the requirement in plans
        When user clicks on cancel on Record Status of plans
        Then the page should display the data as per the selection

    @SPEC-Level2
    Scenario: Verify selecting one data and deslecting one data from Recoord Status filter in plans Page
        Given user landed in plans page
        When user clicks on Record Status Filter in plans
        And user clicks on New Status of Record status in plans
        And user click on apply of Record status in plans
        Then the plans page should show the data only with New status
        When user clicks on Record Status Filter in plans
        And user clicks on New Status of Record status in plans
        And user click on apply of Record status in plans
        Then the page should display the data as per the selection
    
    @SPEC-Level2
    Scenario:Verify Overview inside Details Page in plans Module
        Given user landed in plans page
        When user clicks on one of the Plan Name
        Then Plan details page displayed with specified header
        ##When user clicks plans link
        ##Then user is in plans page

    @SPEC-Level2
    Scenario:Verify Documents inside Details Page in plans Module
        Given user is in details page of plans
        When user clicks on Documents link in plans
        Then column names should match agaisnt requirement for Documents for Drugs inside plans
    @SPEC-Level2
    Scenario:Verify Links inside Details Page in plans Module
        Given user is in details page of plans
        When user clicks on Links link in plans
        Then column names should match agaisnt requirement for Documents for Links inside plans
    @SPEC-Level2
    Scenario:Verify History inside Details Page in plans Module
        Given user is in details page of plans
        When user clicks on History link inside plans
        Then column names should match agaisnt requirement for Documents for History inside plans
        And user clicks plans link

    @SPEC-Level2
    Scenario: Verify Links Page to Home Page 
		 Given user clicks on menu clicks on home
		 Then user is in home page 