package com.zerobank.pages;

import com.zerobank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {


    @FindBy(id = "onlineBankingMenu")
    public WebElement onlineBanking;

    @FindBy(id = "account_summary_link")
    public WebElement accountSummary;

    @FindBy(id = "account_activity_link")
    public WebElement accountActivity;

    @FindBy(id = "transfer_funds_link")
    public WebElement transferFunds;

    @FindBy(id = "pay_bills_link")
    public WebElement payBills;

    @FindBy(id = "money_map_link")
    public WebElement myMoneyMap;

    @FindBy(id = "online_statements_link")
    public WebElement onlineStatements;

    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    public void onlineBanking(String choose) {
        onlineBanking.click();
        switch (choose) {

            case "as":
                accountSummary.click();
                break;
            case "AA":
                accountActivity.click();
                break;
            case "tf":
                transferFunds.click();
                break;
            case "pb":
                payBills.click();
                break;
            case "mmm":
                myMoneyMap.click();
                break;
            case "os":
                onlineStatements.click();
                break;
        }



    }

    public void showTitle(String expected){

     Assert.assertTrue("Title isn't expected",Driver.get().getTitle().equals(expected));


    }


}
