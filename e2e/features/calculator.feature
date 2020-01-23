Feature: Calculator Feature

Scenario: Add 2 Numbers
Given I have navigated to the calculator
When I add two numbers "1" and "2"
Then the displayed output should be "3"