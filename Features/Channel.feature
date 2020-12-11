Feature: Channel Module Feature

   

@SPEC-Level2
Scenario: Verify user can view Channels Page 
			Given user is on Home Page
			Given user clicks on Menu button
			When user clicks on the Administration module in left hand side Pane
			And user clicks on Channels
			Then user is in Channels Page

@SPEC-Level2			
Scenario: Verify column names in Channel Page 
			Given user is in channel page
			When user get all column names and compare with testdata
			Then column name should match


@SPEC-Level2			
Scenario: Verify Search in Channel Page 
			Given user is in channel page
			When enters text in search textbox 
			Then channel page displays based on text


@SPEC-Level2			
Scenario: Verify Detail view in Channel Page 
         Given user is in channel page
		 When user click on channel
		 Then detail view of channel is displayed

@SPEC-Level2			
Scenario: Verify navigtation Channel page to Home Page 
			Given user is in channel page
			When user clicks on menu clicks on home
			Then user is in home page 
