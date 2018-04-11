Feature: GoogleSearch

  Scenario: Search travel pictures
    Given I have open the browser
    And I search "travel images" on Google
    Then Google returns the images
