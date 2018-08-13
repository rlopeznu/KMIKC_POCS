package com.latam.moss.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.latam.moss.actions.LoginActions;
import com.latam.moss.pages.LoginPO;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	public WebDriver driver;

	public Login() {
		driver = WebDriverProducer.driver;
	}

	@Given("^I am on the login page with credentials$")
	public void iAmOnTheLoginPageWithCredentials() throws Throwable {
		PageFactory.initElements(driver, LoginPO.class);
		LoginActions.enterCredentials();
	}

	@When("^I click on SIGN IN$")
	public void iClickOnSIGNIN() throws Throwable {
		LoginActions.clickSignIn();
	}

	@Then("^It should redirect$")
	public void itShouldRedirect() throws Throwable {
		LoginActions.openDialogAccept(driver);
	}

	@Given("^I want to write a step with name(\\d+)$")
	public void iWantToWriteAStepWithName(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@When("^I check for the (\\d+) in step$")
	public void iCheckForTheInStep(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^I verify the success in step$")
	public void iVerifyTheSuccessInStep() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^I verify the Fail in step$")
	public void iVerifyTheFailInStep() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

}
