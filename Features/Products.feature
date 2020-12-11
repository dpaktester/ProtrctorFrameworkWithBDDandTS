Feature: Products Module Feature

@SPEC-Level2
Scenario:  Verify user can view Products Page
Given user clicks on Menu button 
When user clicks on the Products module in left hand side Pane
Then user is in Products Page

@SPEC-Level2
Scenario:  Verify column names in Products Page
Given user in Products Page
When user verifies column names against column name data set
Then column name should match

@SPEC-Level2
Scenario:  Verify Channel filter in Products Page
Given user in Products Page
When user clicks on Channels filter
Then Channel filter diplays all channel option
When user select given channel and click on apply button
Then main grid display information based on selected channel
When user de select selected channel and click on apply button
Then main grid default is displayed


@SPEC-Level2
Scenario:  Verify Record status filter in Products Page
Given user in Products Page
When user clicks on Record status filter
Then Record status filter diplays all channel option
When user select given Record status and click on apply button
Then main grid display information based on selected Record status
When user de select selected chRecord status and click on apply button
Then main grid default is displayed


@SPEC-Level2
Scenario:  Verify Detail Page in Products
Given user in Products Page
When user click on one of the products 
Then detailed Page is displayed 



@SPEC-Level2
Scenario:  Verify Edit for Products
Given user in detail Products Page
When user click edit 
Then edit Page is displayed 
When user edit in channel and click on save
Then products is modified with record status as Modified


@SPEC-Level2
Scenario:  Verify Document TAB in Products Page
Given user in detail Products Page
When user clicks on Document TAB
Then Document TAB is displayed
Then user move back to overview TAB


@SPEC-Level2
Scenario:  Verify Link TAB in Products Page
Given user in detail Products Page
When user clicks on Link TAB
Then Link TAB is displayed
Then user move back to overview TAB


@SPEC-Level2
Scenario:  Verify History TAB in Products Page
Given user in detail Products Page
When user clicks on History TAB
Then History TAB is displayed
Then user move back to overview TAB



