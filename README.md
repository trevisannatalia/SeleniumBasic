# SeleniumBasic
Basic project using Cucumber, SeleniumWebdriver and Java

### README ###
This project is a base to learn more about SeleniumWebdriver using Cucumber and Java.

### PROJECT REQUIREMENTS ###
JDK
Eclipse (or another IDE)

### HOW TO CONFIGURE ###
Import the project as maven project using an IDEA
Install the Cucumber plugin: on Eclipse > Help > Install New Software > Inform the URL https://cucumber.io/cucumber-eclipse/update-site

### HOW TO RUN THE TESTS ###
Is possible to run the tests with two differents ways
First: Click with right button inside the cucumber file > run as > Cucumber Feature
Second: Access the TestRunner file > run as > JUnit Test

### WHERE IS THE REPORT ###
Is possible to configure where the system must save the report, this configuration is on TestRunner file:
plugin = { "pretty", "html:target/cucumber-reports" }
In this case, the report will save on target/cucumber-reports > index is the tests result.
