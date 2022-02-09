package com.zerobank.stepdefinitions;

import com.zerobank.pages.OBPages;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

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





}
