Feature: Links Module Feature

@SPEC-Level2
Scenario: Verify user can view Links Page 
			Given user is on Home Page
			Given user clicks on Menu button
			When user clicks on the Administration module in left hand side Pane
			Then user clicks on Links
			Then user is in Links Page
@SPEC-Level2
Scenario: Verify Column names in  Links Page
          Given user is on links page
		  When user get column names from test data
		  Then column names should match
		  
@SPEC-Level2		
Scenario: Verify Reord Type view Links Page 
         Given user is on links Page
		 When user clicks on Record Type and select one option click apply
		 Then link page is refershed with selected Reord Type data
		 
@SPEC-Level2		 
Scenario: Verify All Reord Type view Links Page 
         Given user is on links Page
		 When user clicks on Record Type and deselect selected option click apply
		 Then link page is refershed with all Reord Type data

@SPEC-Level2		 
Scenario: Verify Cancel Reord Type view Links Page 
         Given user is on links Page
		 When user clicks on Record Type and select  option click cancel
		 Then user click on RecordType 
		 Then Any Record type option should not be selected
@SPEC-Level2
Scenario: Verify Content Type view Links Page 
         Given user is on links Page
		 When user clicks on Content Type and select one option click apply
		 Then link page is refershed with selected Content Type data

@SPEC-Level2		 
Scenario: Verify All Content Type view Links Page 
         Given user is on links Page
		 When user clicks on Content Type and deselect selected option click apply
		 Then link page is refershed with all selected Content Type data

@SPEC-Level2	 
Scenario: Verify Cancel Content Type view Links Page 
         Given user is on links Page
		 When user clicks on Content Type and select  option click cancel
		 Then user click on Content 
		 Then Any Content type option should not be selected

@SPEC-Level2	 
Scenario: Verify Status Type view Links Page 
         Given user is on links Page
		 When user clicks on Status Type and select one option click apply
		 Then link page is refershed with selected Status Type data

@SPEC-Level2		 
Scenario: Verify All Status Type view Links Page 
         Given user is on links Page
		 When user clicks on status Type and deselect selected option click apply
		 Then link page is refershed with all selected Status Type data
		 
@SPEC-Level2	 
Scenario: Verify Cancel Status Type view Links Page 
         Given user is on links Page
		 When user clicks on Status Type and select  option click cancel
		 Then user click on Status 
		 Then Any Status type option should not be selected

@SPEC-Level2		 
Scenario: Verify Links Page to Home Page 
         Given user is on links Page
		 When user clicks on menu clicks on home
		 Then user is in home page 