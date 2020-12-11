Feature: Formularies Module


    @SPEC-Level2
    Scenario:  Verify user can view Formularies Page
        Given user clicks on Menu button
        When user clicks on the Formualaries module in left hand side Pane
        Then user is in Formularies Page


    @SPEC-Level2
    Scenario:  Verify column names in Formularies Page
        Given user in Formularies Page
        When user get column names from test data and comapre with grid column names
        Then column name should match



    @SPEC-Level2
    Scenario:  Verify Formulary type filter in Formularies Page
        Given user in Formularies Page
        When user click on Formulary Types filter
        Then user view specified forlary types


    @SPEC-Level2
    Scenario:  Verify Apply action on Formulary type filter
        Given user in formulary type filter
        When user selectes one of the formualry type and click on apply button
        Then main gird populated with data related to specefied formulary type

    @SPEC-Level2
    Scenario:  Verify Apply action on de selection of Formulary type filter
        Given user in Formularies Page
        When user de selectes one of the formualry type and click on apply button
        Then main gird populated with defult data



    @SPEC-Level2
    Scenario:  Verify cancel action on de selection of Formulary type filter
        Given user in Formularies Page
        When user click on Formulary Types filter
        And user  selectes one of the formualry type and click on cancel button
        Then main gird populated with defult data


    @SPEC-Level2
    Scenario:  Verify Formulary Status filter in Formularies Page
        Given user in Formularies Page
        When user click on Record Status filter
        Then user view specified Record Status


    @SPEC-Level2
    Scenario:  Verify Apply action on Record Status filter
        Given user in Record Status filter
        When user selectes one of the Record Status and click on apply button
        Then main gird populated with data related to specefied Record Status

    @SPEC-Level2
    Scenario:  Verify Apply action on de selection of Record Status filter
        Given user in Formularies Page
        When user de selectes one of the Record Status and click on apply button
        Then main gird populated with defult data



    @SPEC-Level2
    Scenario:  Verify cancel action on de selection of Formulary Record Status filter
        Given user in Formularies Page
        When user click on Record Status filter
        And user  selectes one of the Record Status and click on cancel button
        Then main gird populated with defult data

    @SPEC-Level2
    Scenario:  Verify Detail Page for Formulary
        Given user in Formularies Page
        When user clicks on one of the formulary Record
        Then detail page is displayed with selected formulary record data


    @SPEC-Level2
    Scenario:  Verify TABs in Detail Page
        Given user in Detail Formularies Page
        When user get the Tab's Names and compare with test data
        Then Tab names should match


    @SPEC-Level2
    Scenario: Verify navigtation Formularies page to Home Page
        Given user in Detail Formularies Page
        When user clicks on menu clicks on home
        Then user is in home page
