$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Testing Login",
  "description": "\nI want to use this template for my feature file",
  "id": "testing-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 4414098906,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login",
  "description": "",
  "id": "testing-login;login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the login page with credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on SIGN IN",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "It should redirect",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iAmOnTheLoginPageWithCredentials()"
});
formatter.result({
  "duration": 195641160,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnSIGNIN()"
});
formatter.result({
  "duration": 2038558315,
  "status": "passed"
});
formatter.match({
  "location": "Login.itShouldRedirect()"
});
formatter.result({
  "duration": 546242889,
  "status": "passed"
});
formatter.after({
  "duration": 1154203696,
  "status": "passed"
});
});