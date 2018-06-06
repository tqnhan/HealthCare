
Feature('Benefit Feature');

let url = "http://52.15.139.169:8000/#/benefits";

Scenario('Create a new benefit - VN', (I) => {
    I.amOnPage(url);
    I.waitForElement('#btnAddBenefit', 2);
    I.see('Benefits','.pageHeader___Pze-l');

    I.click('//*[@id="btnAddBenefit"]');
    I.see('Add Benefit');
    
    //Select language
    I.click('.selectLanguage');
    I.fillField('.selectLanguage','Tiếng Việt');
    
    //Select currency
    I.click('.selectCurrency');
    I.fillField('.selectCurrency','Việt Nam Đồng (VND)');
    I.dontSee('Please select a currency!');

    //Enter benefit name
    I.fillField(label='Benefit Name','CHI PHÍ Y TẾ DO TAI NẠN');
    I.dontSee('Please enter a name for benefit!');

    //Enter benefit code
    I.fillField(label='Benefit Code','MAC101');
    I.dontSee('Please enter a code for benefit!');

    //Choose apply type
    I.click('.applyTypeday');
    I.dontSee('Please select one apply type!');

    //Enter Unit value
    I.fillField('//*[@id="applyUnit"]','-1');
    I.dontSee('Please set a unit value!');

    //Choose waiting period
    I.click('//*[@id="applyWaitingPeriod"]');

    // Choice billing type
    I.click('.billingTypeyearly');
    I.dontSee('Please select one billing type!');

    //Enter min Sum Assured
    I.fillField('//*[@id="minSumAssured"]','-50,000,000');
    I.dontSee('Please set a min value!');

    //Enter max Sum Assured
    I.fillField('//*[@id="maxSumAssured"]','-100,000,000');
    I.dontSee('Please set a max value!');

    I.click('OK');
});

Scenario('Create a new benefit - EN', (I) => {

    I.amOnPage(url);
    I.see('Benefits','.pageHeader___Pze-l');

    I.click('//*[@id="btnAddBenefit"]');
    I.see('Add Benefit');
    
    //Select language
    I.click('.selectLanguage');
    I.fillField('.selectLanguage','English');
    
    //Select currency
    I.click('.selectCurrency');
    I.fillField('.selectCurrency','US Dollar (VND)');
    I.dontSee('Please select a currency!');

    //Enter benefit name
    I.fillField(label='Benefit Name','MEDICAL EXPENSE DUE TO ACCIDENT');
    I.dontSee('Please enter a name for benefit!');

    //Enter benefit code
    I.fillField(label='Benefit Code','MAC101');
    I.dontSee('Please enter a code for benefit!');

    //Choose apply type
    I.click('.applyTypeday');
    I.dontSee('Please select one apply type!');

    //Enter Unit value
    I.fillField('//*[@id="applyUnit"]','-1');
    I.dontSee('Please set a unit value!');

    //Choose waiting period
    I.click('//*[@id="applyWaitingPeriod"]');

    // Choice billing type
    I.click('.billingTypeyearly');
    I.dontSee('Please select one billing type!');

    //Enter min Sum Assured
    I.fillField('//*[@id="minSumAssured"]','-50,000,000');
    I.dontSee('Please set a min value!');

    //Enter max Sum Assured
    I.fillField('//*[@id="maxSumAssured"]','-100,000,000');
    I.dontSee('Please set a max value!');

    I.click('OK');
});