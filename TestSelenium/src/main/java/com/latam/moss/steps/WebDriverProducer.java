package com.latam.moss.steps;

import java.net.MalformedURLException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.latam.moss.utils.PropertyUtil;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import lombok.Data;

@Data
public class WebDriverProducer {

	public static WebDriver driver;
	public WebDriverWait wait;
	String stagingUrl = PropertyUtil.getInstance().getProperties().getProperty("staging.url");

	@Before()
	public void openBrowser() throws MalformedURLException {
		FirefoxOptions options = new FirefoxOptions();
		options.addArguments("--start-maximized");
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 60);
		driver.manage().deleteAllCookies();
		driver.get(stagingUrl);
	}

	@After()
	public void teardown() {
		driver.quit();

	}

}
