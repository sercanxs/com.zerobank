package com.zerobank.stepdefinitions;

import com.zerobank.pages.OBPages;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

public class AboutOnlineBanking {


    @When("the user should be able lands on {string}")
    public void the_user_should_be_able_lands_on(String string) {

        OBPages obpages = new OBPages();
        obpages.onlineBanking(string);

    }

    @Then("this page should have the title {string}")
    public void this_page_should_have_the_title(String expected) {
        OBPages obpages = new OBPages();
        obpages.showTitle(expected);
    }
    @Then("Account summary page should have to following account types {string}")
    public void account_summary_page_should_have_to_following_account_types(String types) {


        String text = Driver.get().findElement(By.xpath("//*[text()='"+types+"']")).getAttribute("innerHTML");
        System.out.println(text);
        Assert.assertTrue("there are something wrong",text.equals(types));


    }

    @Then("the user should be able to see {string}")
    public void the_user_should_be_able_to_see(String column) {

        String text = Driver.get().findElement(By.xpath("//*[text()='Credit Card']/..")).getText();
        Assert.assertTrue("Column's aren't same",text.contains(column));
    }

    @Then("In the Account Dropdown default option should be {string}")
    public void in_the_Account_Dropdown_default_option_should_be(String string) {
        WebElement dropDown = Driver.get().findElement(By.id("aa_accountId"));

        Select select = new Select(dropDown);
        List<WebElement> options = select.getOptions();
        Assert.assertTrue("Dropdown default Option isn't the same",options.get(0).getText().equals(string));

    }

    @Then("Account Dropdown should have all expected options.")
    public void account_Dropdown_should_have_all_expected_options(List<String> dropdownOptions) {
        WebElement dropDown = Driver.get().findElement(By.id("aa_accountId"));
        Select select = new Select(dropDown);
        List<WebElement> options = select.getOptions();

        ArrayList<String> list = new ArrayList<>();

        for (WebElement option : options) {

            list.add(option.getText());

        }
        Assert.assertTrue("dropdowns contains all expected",list.containsAll(dropdownOptions));



    }








}
