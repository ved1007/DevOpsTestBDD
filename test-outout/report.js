$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/PC%20User1/Desktop/SeleniumFiles/DevOpsTestBDD/src/main/java/Features/Google.feature");
formatter.feature({
  "name": "Google Page Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Google page testing",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Open the Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "GooglePageStep.open_the_Google_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter value into the search field",
  "keyword": "Then "
});
formatter.match({
  "location": "GooglePageStep.enter_value_into_the_search_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the Search button",
  "keyword": "Then "
});
formatter.match({
  "location": "GooglePageStep.click_the_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the Google  page",
  "keyword": "And "
});
formatter.match({
  "location": "GooglePageStep.close_the_Google_page()"
});
formatter.result({
  "status": "skipped"
});
});