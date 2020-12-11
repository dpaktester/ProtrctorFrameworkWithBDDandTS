Feature: Coverage Policy Regression Suite

    @SPEC-Level2
    Scenario:  Verify user is on Coverage Policies Module
        Given User clicks on Menu button
        When User clicks on the Coverage Policies module in left hand side Pane
        Then The Header is Coverage Policies there

    @SPEC-Level2
    Scenario:  Verify Search pannel in Coverage Policies Module
        Given User is on Search Text Box
        When User enters "Aetna"
        Then User is able to see the policies  per entered data

    @SPEC-Level2
    Scenario:  Verify Cancel button of Policy Type  in Coverage Policies Module
        Given User Clicks on Policy Type
        When The header is "Policy Type" In Policy Type
        Then Check the Data Aganist The Requirement for Policy Type
        When User clicks on Cancel button
        Then User should be able too see the data with only selected policy Type One

    @SPEC-Level2
    Scenario:  Verify Policy Type  in Coverage Policies Module
        Given User Clicks on Policy Type
        When The header is "Policy Type" In Policy Type
        When User Select Pharmacy policy and click on Apply button
        Then User should be able too see the data with only selected policy Type Two
        When User Unselected the selected Pharmacy policy and clicks on Apply button
        Then User should be able too see the data with only selected policy Type There

    @SPEC-Level2
    Scenario:  Verify Cancel button of Channel in Coverage Policy Module
        Given User Clicks on Channel
        When The header of channels  is "Channels"
        Then Check the Data Aganist The Requirement for channels
        When User clicks on Cancel button
        Then User Should be able to see the data with selected Channel after clicking cancel

    @SPEC-Level2
    Scenario:  Verify Channel in Coverage Policy Module
        Given User Clicks on Channel
        When The header of channels  is "Channels"
        When User Selected Commercial Channel and clicks on Apply button
        Then User Should be able to see the data with selected Channel after Selecting Channel
        Given User Clicks on Channel
        When User Unselected The selected Channel and clicks on Apply button
        Then User Should be able to see the data with selected Channel after clicking cancel

    @SPEC-Level2
    Scenario:  Verify the Cancellation of Record Status in Coverage Policy Module
        Given User Clicks on Record Status
        When The header of Record status is "Status"
        Then Check the Data Aganist The Requirement of Record Status
        When User Clicks on Cancel of Record Status
        Then User should see the data with all possible Record Status

    @SPEC-Level2
    Scenario:  Verify the Functionality of Record Status in Coverage Policy Module
        Given User Clicks on Record Status
        When The header of Record status is "Status"
        When User Selects New from the Record Types and clicks on Apply Button
        Then User should see the data with New Status only
        Given User Clicks on Record Status
        When User UnSelects New from the Record Types and clicks on Apply button
        Then User should see the data with all possible Record Status

    @SPEC-Level2
    Scenario:  Verify the existence of New in Coverage Policy Module
        Given User Clicks on New in Coverage Policies
        When The header of New is "Create a new Policy"
        Then Check the fields Aganist The Requirement for Creating New Policy
        When User clicks on Cancel Button of New Policy
        Then User should be landed to the CoveragePolicyPage

    @SPEC-Level3
    Scenario:  Verify the functionality of New in Coverage Policy Module
        Given User Clicks on New in Coverage Policies
        When The header of New is "Create a new Policy"
        And User Enters Policy Name "Test from Mozenda Team"
        And User Enters "Aetna" and selects the first option in Policy Owner
        And User Selects "Pharmacy Type" from the Policy Type
        And User Enters description  "Testing New Functionality"
        And User Enters Start Date and End Date
        ###And User Enters Printed Policy Name  "Testing QA Team"
        And User clicks on Create of New
        Then header Should have "Policy Name"

    @SPEC-Level2
    Scenario:  Verify the grid data in Coverage Policy Module
        Given User clicks on Coverage Policy
        When User Clicks policy Name on second plociy from policies
        Then Check the Fileds against the Requirement for the policy


    @SPEC-Level3
    #@SPEC-Level2
    Scenario:  Verify the functionality of Main Information Edit under Over View in  Coverage Policy Module
        Given User click on Edit icon under Main Information
        When The Header is "Edit a Policy" of Editing a policy
        Then Check the fields Aganist The Requirement for Creating New Policy
        Then User Clicks on Cancel of Edit a Policy
        Given User click on Edit icon under Main Information
        When The Header is "Edit a Policy" of Editing a policy
        When User Enters the Description of Edit Policy
        And User clicks on Save Button
        Then The Descritption in the grid should be updated per the user entered

    @SPEC-Level2
    Scenario:  Verify the Data in Policy Channel Edit under Over View in  Coverage Policy Module
        ##Given User Clicks on Overview inside CP
        Given User Clicks under Edit icon under Policy Channels
        And The Header should be "Edit Channels" of Editing Channel
        Then Check the Data Aganist The Requirement for channels
        When User Clicks on Cancel on Edit Of Channels
        Then The Channel should not change

    @SPEC-Level3
    Scenario:  Verify the Functionality of Policy Channel Edit under Over View in  Coverage Policy Module
        Given User Clicks under Edit icon under Policy Channels
        When The Header should be "Edit Channels" of Editing Channel
        And User selects Channel "Health Insurance Exchange" and clicks on Save Button
        Then User should receive an alert saying "1" Channel is updated
        Given User Clicks under Edit icon under Policy Channels
        When The Header should be "Edit Channels" of Editing Channel
        Then User Unselects Channel  "Health Insurance Exchange"  and clicks on Save Button

         #### New Feature #######
    @SPEC-Level2
    Scenario: Verify Coverage Policy edit operation
        Given User click on Edit icon under Main Information
        When The Header is "Edit a Policy" of Editing a policy
        When User Enters the Description of Edit Policy
        And User clicks on Save Button
        Then Policy is modified with record status as modified
        When user click on complete button in Coverage Policy detail page
        Then user verifies exsistance of continue button on CP
        When user clicks on continue button on CP
        Then user verifies exsistance of Approve or Reject button on CP
        When user click on Approve button on CP
        Then Policy is modified with record status as Approved on CP

    @SPEC-Level2
    Scenario: Verify History TAB
        Given user is in detail CoveragePolicy Page
        When user click on History Tab on CP
        Then user view histroy Tab  with details of Policy record changes

    ###### END #########


    #@SPEC-Level2
    #Scenario:  Verify Selection of Drugs in  Coverage Policy Module
        #Given User Clicks on Drugs
        # Then The user should be able to see the Headers in the grid
        # When User clicks on Managed Asociated Drugs Button
        # Then The Header Should Be Drugs of Drugs
        # Then User clicks on Cancel Button of Drugs
        # When User clicks on Managed Asociated Drugs Button
        # Then The Header Should Be Drugs of Drugs
        # When User selects one drug and Click on Save
        # Then The User Should get an alert saying 1 Drug has been added
        # And The Field should update with current drug selection

    #@SPEC-Level2
    # Scenario:  Verify cancelation of Drug selection in Coverage Policy Module
        # When User clicks on Managed Asociated Drugs Button
        # Then The Header Should Be Drugs of Drugs
        # When The User unselects the selected Drugs and clicks on Save
        # Then User should get an alert saying 1 Drug has been deleted
    ########## New Scenarios #################################
    @SPEC-Level2
    Scenario:  Verify Existence of Drug Indiations under Coverage Policy Module
        Given User clicks on Drug Indication
        Then The user should be able to see the Headers in the grid for Drug Indication

    @SPEC-Level2
    Scenario:  Verify Selection of Drug Indications inside a policy in Coverage Policy Module
        When User clicks on Asociated Drug-Indication Button
        Then The Header Should Be Drug-Indications of Drug Indications
        Then User clicks on Cancel Button of Drug-Indication
        When User clicks on Asociated Drug-Indication Button
        Then The Header Should Be Drug-Indications of Drug Indications
        When User selects one drug-Indication
        And User Click on Save in drug-Indication
        Then The User Should get an alert saying 1 drug-indication has been added
        And The Field should update with current drug-indication selection
    @SPEC-Level2
    Scenario:  Verify cancelation of Drug selection in Coverage Policy Module
        When User clicks on Asociated Drug-Indication Button
        Then The Header Should Be Drug-Indications of Drug Indications
        When User Un-selects one drug-Indication
        And User Click on Save in drug-Indication
        Then The User Should get an alert saying 1 drug-indication has been deleted

    @SPEC-Level2
    Scenario:  Verify Existence of Step Therapy under Coverage Policy Module
        Given User clicks on Step Tharpy
        Then The user should be able to see the Headers in the grid for Step Therapy


    ####### Till Here #########
    @SPEC-Level2
    Scenario:  Verify Existence of Documents under Coverage Policy Module
        Given User clicks on Documents
        Then The Grid Column should match with the Requirement

    @SPEC-Level2
    ###@SPEC-Level3
    Scenario:  Verify creation of New Document under Coverage Policy Module
        Given User Clicks on The New Button On The Right Hand Pane
        Then The Header should be "Add Document" On Documents
        Then User Verifies all the fields in the grid
        And clicks on Cancel In Documents
        Given User Clicks on The New Button On The Right Hand Pane
        When User enters Document name "Testing QA Team"
        And Selects Document Type "Prior Authorization Form"
        And Selects Content Type "text/html"
        And Enters Description "For Testing New Field" for Add Document
        And clicks on Cancel In Documents
        #######And  User clicks on Create
        #######Then The Header should have the Document Name after Creating Documents
        #######Then User Clicks on back Button

    @SPEC-Level2
    Scenario:  Verify Existence of Links under Coverage Policy Module
        Given User clicks Links inside Policy
        When The Grid Column for Links is matching with the Requirement


    @SPEC-Level2
    Scenario:  Verify Cacellation of Links under Coverage Policy Module
        Given User clicks on New in Links inside Policy
        When The Header is "Add New Link" inside Links
        Then User Clicks on Cancel inside New Of Links

    @SPEC-Level3
    Scenario:  Verify Creation of Links under Coverage Policy Module
        Given User clicks on New in Links inside Policy
        When The Header is "Add New Link" inside Links
        Then User Verifis the fileds in Links
        When User Enters Name  "Testing Link QA Team" Inside Name Of Links
        And User Enters Description  "Testing Creation of New Link" Inside Links
        And User Enters URL "https://www.google.com/" In Links
        And User Selects Link Type "Web Page URL" In Adding Links
        And User Select Content Type "image/jpeg" In Link
        And User clicks on Create Button under Addnew link of Links
        Then The Link should be created
        Then User should Verify the Grid of The Created Policy
        When User Clicks on URL
        When User closes the New Window



    @SPEC-Level2
    Scenario: Verify Links Page to Home Page
        Given user clicks on menu clicks on home
        Then user is in home page