Feature: Calc Feature

@regression
Scenario: Add 2 
Given I have navigated to the "calculator" site
When I add two numbers "6" and "7"
Then the displayed output should be "53"