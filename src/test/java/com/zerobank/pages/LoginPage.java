package com.zerobank.pages;

import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    @FindBy(css = "[id='signin_button']")
    public WebElement signinButton;

    @FindBy(id="user_login")
    public WebElement userName;

    @FindBy(id = "user_password")
    public WebElement password;
    @FindBy(xpath = "//input[@tabindex='4']")
    public WebElement loginButton;

public LoginPage(){

    PageFactory.initElements(Driver.get(), this);


}
public void LoginPage(){
    Driver.get().get(ConfigurationReader.get("url"));

    String username = ConfigurationReader.get("username");
    String password = ConfigurationReader.get("password");

    signinButton.click();
    userName.sendKeys(username);
    this.password.sendKeys(password);
    loginButton.click();
    Driver.get().navigate().back();



}


}
