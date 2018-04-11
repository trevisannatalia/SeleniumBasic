$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "GoogleSearch",
  "description": "",
  "id": "googlesearch",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1429231493,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Search travel pictures",
  "description": "",
  "id": "googlesearch;search-travel-pictures",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search \"travel images\" on Google",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Google returns the images",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_have_open_the_browser()"
});
formatter.result({
  "duration": 3618701316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "travel images",
      "offset": 10
    }
  ],
  "location": "GoogleSearch.i_search_on_Google(String)"
});
formatter.result({
  "duration": 1374262802,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.google_returns_the_images()"
});
formatter.result({
  "duration": 125410935,
  "status": "passed"
});
});