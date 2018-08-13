package com.latam.moss.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class LoginPO extends BasePage {

	public LoginPO(WebDriver driver) {
		super(driver);
	}

	@FindBy(name = "username")
	@CacheLookup
	public static WebElement username;

	@FindBy(name = "password")
	@CacheLookup
	public static WebElement password;

	@FindBy(name = "Submit")
	@CacheLookup
	public static WebElement submit;

}
