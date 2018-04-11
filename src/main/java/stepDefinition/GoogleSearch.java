package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class GoogleSearch {
	
	private WebDriver webdriver = null;
	
	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "chrome/chromedriver");
		webdriver = new ChromeDriver();
	}
	
	@Given("^I have open the browser$")
	public void i_have_open_the_browser() throws Throwable {
		webdriver.get("http://www.google.com");
	}
	
	@And("^I search \"([^\"]*)\" on Google$")
	public void i_search_on_Google(String arg1) throws Throwable {
	    webdriver.findElement(By.name("q")).sendKeys(arg1);
	    webdriver.findElement(By.name("q")).sendKeys(Keys.ENTER);
	}

	@Then("^Google returns the images$")
	public void google_returns_the_images() throws Throwable {
	    webdriver.findElement(By.id("uid_dimg_0"));
	    webdriver.close();
	}
}
