Feature: Login Outline

Scenario Outline: Login with invalid credentials
Given I am on the login page
When I fill in my email and password with <user> and <pass>
Then I should validate I am not logged in

Examples:
| user     | pass       |
| user1    | paswordo   |
| user23   | passty     |
| useranme | paswordo12 |
| user     | passc432q  |
| user1    | paswordop  |