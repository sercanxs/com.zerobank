package com.zerobank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PayBills extends BasePage{

    @FindBy(id = "pay_saved_payees")
    public WebElement paybutton;

    @FindBy(id = "purchase_cash")
    public WebElement purchasebutton;
}
