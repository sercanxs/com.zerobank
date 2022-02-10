package com.zerobank.stepdefinitions;

import com.zerobank.pages.OBPages;
import com.zerobank.utilities.Driver;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
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

    @When("User should able to complete pay operation {string} {string}")
    public void user_should_able_to_complete_pay_operation(String string, String string2) {
        Driver.get().findElement(By.id("sp_amount")).sendKeys(string);
        Driver.get().findElement(By.id("sp_date")).sendKeys(string2);
        Driver.get().findElement(By.id("pay_saved_payees")).click();

    }

    @When("click the {string}")
    public void click_the(String string) throws InterruptedException {

        if (string.equals("Credit Card")) {
            Driver.get().findElement(By.xpath("(//*[text()='" + string + "'])[2]")).click();
        } else {
            Driver.get().findElement(By.xpath("//*[text()='" + string + "']")).click();
        }
        Thread.sleep(3000);

    }

    @When("the user enters data range from {string} to {string}")
    public void the_user_enters_data_range_from_to(String date1, String date2) {
        Driver.get().findElement(By.id("aa_fromDate")).sendKeys(date1);
        Driver.get().findElement(By.id("aa_toDate")).sendKeys(date2);
    }

    @When("delete the current date1 and date2")
    public void delete_the_current_date1_and_date2() {
        Driver.get().findElement(By.id("aa_fromDate")).clear();
        Driver.get().findElement(By.id("aa_toDate")).clear();
    }

    @When("the user enters description {string}")
    public void the_user_enters_description(String string) throws InterruptedException {
        Driver.get().findElement(By.id("aa_description")).sendKeys(string);
        Thread.sleep(3000);
    }

    @When("select for type {string}")
    public void select_for_type(String string) {
        WebElement element = Driver.get().findElement(By.id("aa_type"));
        Select select = new Select(element);
        select.selectByVisibleText(string);

    }

    @Then("the results should only show descripotions containing {string} but not {string}")
    public void the_results_should_only_show_descripotions_containing_but_not(String string, String string2) {
        List<WebElement> elements = Driver.get().findElements(By.xpath("//div[@id='filtered_transactions_for_account']/table/tbody/tr"));
        int size = elements.size();
        String descvalue = null;

        for (int x = 1; x <= size; x++) {
            descvalue = Driver.get().findElement(By.xpath("//div[@id='filtered_transactions_for_account']/table/tbody/tr[" + x + "]/td[2]")).getAttribute("innerHTML");
            Assert.assertTrue("Result table,description part isn't same with expected", descvalue.contains(string));
            Assert.assertFalse(string + "and" + string2 + "must in seperate result", descvalue.contains(string2));
        }
        Driver.get().findElement(By.id("aa_description")).clear();

    }


    @Then("the results should be sorted from most recent date {string} to oldest date {string}")
    public void the_results_should_be_sorted_from_most_recent_date_to_oldest_date(String date1, String date2) {

        List<WebElement> elements = Driver.get().findElements(By.xpath("//div[@id='filtered_transactions_for_account']/table/tbody/tr"));
        int size = elements.size();
        String datevalue = null;
        int datelasttwo = Integer.parseInt(date1.substring(date1.length() - 2));
        for (int x = 1; x <= size; x++) {
            datevalue = Driver.get().findElement(By.xpath("//div[@id='filtered_transactions_for_account']/table/tbody/tr[" + x + "]/td")).getAttribute("innerHTML");


            Assert.assertTrue("Related date isn't sorted as expected", datelasttwo >= Integer.parseInt(datevalue.substring(datevalue.length() - 2)));
            datelasttwo = Integer.parseInt(datevalue.substring(datevalue.length() - 2));

        }
        Assert.assertTrue("Related date isn't sorted as expected", datelasttwo >= Integer.parseInt(date2.substring(date2.length() - 2)));

    }

    @Then("results table should'nt show {string}")
    public void results_table_should_nt_show(String string) {
        List<WebElement> elements = Driver.get().findElements(By.xpath("//div[@id='filtered_transactions_for_account']/table/tbody/tr"));
        int size = elements.size();
        String column = null;
        int y = 0;
        int z = 0;
        if (string.equals("Deposit")) {
            y = 3;
        } else {
            y = 4;
        }

        for (int x = 1; x <= size; x++) {
            column = Driver.get().findElement(By.xpath("//div[@id='filtered_transactions_for_account']/table/tbody/tr[" + x + "]/td[" + y + "]")).getAttribute("innerHTML");
            if (!column.isBlank()) {
                ++z;
            }

        }
        Assert.assertTrue("Results musn't have " + string + " value, but there more than 0 ", z == 0);

    }


    @Then("results table should show at least {int} result {string}")
    public void results_table_should_show_at_least_result(Integer int1, String string) {
        List<WebElement> elements = Driver.get().findElements(By.xpath("//div[@id='filtered_transactions_for_account']/table/tbody/tr"));
        int size = elements.size();
        String column = null;
        int y = 0;
        int z = 0;
        if (string.equals("Deposit")) {
            y = 3;
        } else {
            y = 4;
        }

        for (int x = 1; x <= size; x++) {
            column = Driver.get().findElement(By.xpath("//div[@id='filtered_transactions_for_account']/table/tbody/tr[" + x + "]/td[" + y + "]")).getAttribute("innerHTML");
            if (!column.isBlank()) {
                ++z;
            }

        }
        Assert.assertTrue("Results table has'nt got enough " + string + " value ", z >= int1);


    }


    @Then("first selected option must be {string}")
    public void first_selected_option_must_be(String string) {

        WebElement A = Driver.get().findElement(By.id("aa_accountId"));
        Select dropdown = new Select(A);
        String expected = dropdown.getFirstSelectedOption().getText();
        Assert.assertTrue("dropdown first option isn't expected", string.equals(expected));

    }

    @Then("user should able to get this message {string}")
    public void user_should_able_to_get_this_message(String string) {
        String actual = Driver.get().findElement(By.xpath("//div[@id='alert_content']/span")).getAttribute("innerHTML");
        Assert.assertTrue("they are not same", string.equals(actual));
    }

    @Then("user should able to get this failed message {string}")
    public void user_should_able_to_get_this_failed_message(String string) {
        String actual = Driver.get().findElement(By.id("sp_amount")).getAttribute("validationMessage");
        Assert.assertTrue("they are not same", string.equals(actual));

    }

    @Then("User should able to get failed message for datainput {string}")
    public void user_should_able_to_get_failed_message_for_datainput(String string) {
        String actual = Driver.get().findElement(By.id("sp_date")).getAttribute("validationMessage");
        Assert.assertTrue("they are not same", string.equals(actual));

    }


    @Then("this page should have the title {string}")
    public void this_page_should_have_the_title(String expected) {
        OBPages obpages = new OBPages();
        obpages.showTitle(expected);
    }

    @Then("Account summary page should have to following account types {string}")
    public void account_summary_page_should_have_to_following_account_types(String types) {


        String text = Driver.get().findElement(By.xpath("//*[text()='" + types + "']")).getAttribute("innerHTML");
        System.out.println(text);
        Assert.assertTrue("there are something wrong", text.equals(types));


    }

    @Then("the user should be able to see {string}")
    public void the_user_should_be_able_to_see(String column) {

        String text = Driver.get().findElement(By.xpath("//*[text()='Credit Card']/..")).getText();
        Assert.assertTrue("Column's aren't same", text.contains(column));
    }

    @Then("In the Account Dropdown default option should be {string}")
    public void in_the_Account_Dropdown_default_option_should_be(String string) {
        WebElement dropDown = Driver.get().findElement(By.id("aa_accountId"));

        Select select = new Select(dropDown);
        List<WebElement> options = select.getOptions();
        Assert.assertTrue("Dropdown default Option isn't the same", options.get(0).getText().equals(string));

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
        Assert.assertTrue("dropdowns contains all expected", list.containsAll(dropdownOptions));


    }

    @Then("Transaction Table should have following column names")
    public void transaction_Table_should_have_following_column_names(List<String> columns) {
        String text = Driver.get().findElement(By.xpath("//*[text()='Description']/..")).getText();
        for (String column : columns) {

            Assert.assertTrue("Actual columns aren't same with expected columns", text.contains(column));

        }

    }

    public static void m1() {


    }


}
