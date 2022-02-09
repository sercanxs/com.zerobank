package com.zerobank.stepdefinitions;

import com.zerobank.pages.LoginPage;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class LoginStepDefs {
    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

        Driver.get().get(ConfigurationReader.get("url"));
        Driver.get().findElement(By.id("signin_button")).click();


    }
    @Given("the user is logged in")
    public void the_user_is_logged_in() throws InterruptedException {


        LoginPage loginpage = new LoginPage();
        loginpage.LoginPage();

    }

    @When("the user enters the {string} {string}")
    public void the_user_enters_the(String username, String password) throws InterruptedException {
        Driver.get().findElement(By.id("user_login")).sendKeys(username);
        Driver.get().findElement(By.id("user_password")).sendKeys(password);
        Driver.get().findElement(By.xpath("//input[@tabindex='4']")).click();


    }





    @Then("the user should be able to login")
    public void the_user_should_be_able_to_login() {
        if (!Driver.get().getTitle().equals(ConfigurationReader.get("login"))) {
        Driver.get().navigate().back();
            Assert.assertTrue("You are not in the main page with valid crendetials", ConfigurationReader.get("main").equals(Driver.get().getTitle()));
        } else {
            if(!ConfigurationReader.get("main").equals(Driver.get().getTitle()));
            {
                System.out.println("You are not in the same Page");
                System.out.println(Driver.get().findElement(By.xpath("//form[@id='login_form']/div[1]")).getText());
            }


        }


    }
}
