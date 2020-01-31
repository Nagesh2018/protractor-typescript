Feature: Calculator Feature

@smoke
Scenario Outline: Add 2 Numbers
Given I have navigated to the "calculator" site
When I add two numbers "<Num1>" and "<Num2>"
Then the displayed output should be "<Num3>"

Examples:
| Num1 | Num2 | Num3 |
| 2    | 4    | 6    |
| 2    | 4    | 6   |

@regression
Scenario: Add 2 
Given I have navigated to the "calculator" site
When I add two numbers "6" and "7"
Then the displayed output should be "53"