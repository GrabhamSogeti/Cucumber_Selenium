$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test3.feature");
formatter.feature({
  "line": 2,
  "name": "Regression Test2",
  "description": "Verify if user is able to Login in to the site",
  "id": "regression-test2",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@Test5"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "regression-test2;login-as-a-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is  on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters username and Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "test.user_is_on_homepage()"
});
formatter.result({
  "duration": 11783063600,
  "status": "passed"
});
formatter.match({
  "location": "test.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 2064885800,
  "status": "passed"
});
formatter.match({
  "location": "test.user_enters_username_and_Password()"
});
formatter.result({
  "duration": 1758231700,
  "status": "passed"
});
formatter.match({
  "location": "test.success_message_is_displayed()"
});
formatter.result({
  "duration": 3706504400,
  "status": "passed"
});
formatter.uri("test5.feature");
formatter.feature({
  "line": 2,
  "name": "Regression Test4",
  "description": "Verify if user is able to Login in to the site",
  "id": "regression-test4",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@Test5"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "regression-test4;login-as-a-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is  on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters username and Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "test.user_is_on_homepage()"
});
formatter.result({
  "duration": 8781000400,
  "status": "passed"
});
formatter.match({
  "location": "test.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 1601389400,
  "status": "passed"
});
formatter.match({
  "location": "test.user_enters_username_and_Password()"
});
formatter.result({
  "duration": 1646646800,
  "status": "passed"
});
formatter.match({
  "location": "test.success_message_is_displayed()"
});
formatter.result({
  "duration": 3522207300,
  "status": "passed"
});
});