@Regression @Test5
Feature: Regression Test5
  Verify if user is able to Login in to the site

  Scenario: Login as a authenticated user
    Given user is  on homepage
    When user navigates to Login Page
    And user enters username and Password
    And user enters username and Password
    Then success message is displayed