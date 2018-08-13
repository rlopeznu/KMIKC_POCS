package com.latam.moss.actions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.latam.moss.pages.LoginPO;
import com.latam.moss.utils.PropertyUtil;

public class LoginActions {
	private static String username = PropertyUtil.getInstance().getProperties().getProperty("username");
	private static String password = PropertyUtil.getInstance().getProperties().getProperty("password");

	public static void clickSignIn() throws Exception {
		LoginPO.submit.click();
	}

	public static void enterCredentials() throws Exception {
		LoginPO.username.sendKeys(username);
		LoginPO.password.sendKeys(password);
	}

	public static void openDialogAccept(WebDriver driver) throws Exception {
		new WebDriverWait(driver, 10).until(ExpectedConditions.alertIsPresent());
		driver.switchTo().alert().accept();
	}
}
