Feature: Agents Module Feature



@SPEC-Level2
Scenario: Verify user can view Agents Page 
			Given user is on Home Page
			Given user clicks on Menu button
			When user clicks on the Administration module in left hand side Pane
            And user clicks on Agents
            Then user is on Agents Page
@SPEC-Level2
Scenario: Verify Agents names
         Given user in Agents Page
         When user retreives column names from test data for Agents 
         And compares against the Agent Page
         Then column names should match for Agents

@SPEC-Level2
Scenario: Verify details page for Agent
          Given user in Agents Page
          When user clicks on one of the agents
          Then user can view details page of agent
    

@SPEC-Level2
Scenario: Verify Link TAB in Agent Detail TAB
          Given user in Detail Agents Page
          When user clicks on Links TAB
          Then user lands to Agent Link TAB
          And Click on Overview TAB
          Then user in Agent detail page

@SPEC-Level3
Scenario: Verify State Machine Approve Operation in Agent 
          Given user in Detail Agents Page
          When user click on Edit button
          Then edit screen is displayed
          When user enters description and click on save button
          Then complete button is displayed on detail screen
          When user click on complete button
          Then Approve or Reject button is displayed
          When user click on Approve
          Then record status will be changed to Approved 
@SPEC-Level3
Scenario: Verify Histroy TAB in Agent
          Given user in Detail Agents Page
          When user clicks on history TAB
          Then History TAB is displayed with latest Modification details
         
@SPEC-Level3
Scenario: Verify New Agent Creation
          Given user in agent main grid
          When user click on New button
          Then New agent creation is displayed
          When user user enetrs agent details and click On save
          Then new agent is created
     

@SPEC-Level2
Scenario:Verify Agent Type Filter in Agent Page
         Given user in agent main grid
         When user click on Agent Type
         Then user view all Agent Types 

@SPEC-Level2
Scenario:Verify Agent Type Filter for apply operation in Agent Page
         Given user in Agents Type filter option
         When user click on of the Agent Type
         And click on apply button
         Then user view reocrds of selected agent type         

@SPEC-Level2
Scenario:Verify Agent Type Filter for deselect option  in Agent Page
         Given user in Agents Page
         When user click on Agent Type
         And deselect the selected option and click on apply button
         Then user view all the records in grid     

@SPEC-Level2
Scenario:Verify Agent Type Filter for Cancel  operation in Agent Page
         Given user in Agents Page
         When user click on Agent Type
         And user select on of the Agent type and click on cancel button 
         Then user view all the records in grid

@SPEC-Level2
Scenario:Verify Agent Status Filter in Agent Page
          Given user in Agents Page
         When user click on Agent Status
         Then user view all Agent Staus 

@SPEC-Level2
Scenario:Verify Agent Status Filter for apply operation in Agent Page
         Given user in Agents Status filter option
         When user click on of the Agent Status
         And click on apply button
         Then user view reocrds of selected agent Status    

@SPEC-Level2			
Scenario: Verify navigtation Agent page to Home Page 
			Given user in Agents Page
			When user clicks on menu clicks on home
			Then user is in home page 
  