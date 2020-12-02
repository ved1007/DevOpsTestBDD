package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class GooglePageStep {

	WebDriver driver;

	@Given("Open the Google page")
	public void open_the_Google_page() {

		// Window
		System.setProperty("webdriver.chrome.driver", "C:/Users/PC User1/Documents/Devops/chromedriver.exe");

		// Macbook
//				System.setProperty("webdriver.chrome.driver","/Users/vedant.jagani/Documents/Automation/SampleAutomation/Drivers/chromedriver");

		driver = new ChromeDriver();
		driver.get("https://www.google.com/");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

	@Then("Enter value into the search field")
	public void enter_value_into_the_search_field() {

	}

	@Then("Click the Search button")
	public void click_the_Search_button() {

	}

	@Then("Close the Google  page")
	public void close_the_Google_page() {
		
		driver.quit();

	}

}
