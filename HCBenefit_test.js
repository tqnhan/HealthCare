
Feature('Benefit Feature');

Scenario('Create a new benefit - VN', (I) => {
    I.amOnPage('http://52.15.139.169:8000/#/benefits');
    I.see('Benefits');
    I.click('//*[@id="btnAddBenefit"]');
    I.see('Add Benefit');
    I.click('.selectLanguage');
    I.fillField('.selectLanguage','Tiếng Việt');
    I.click('.selectCurrency');
    I.fillField('.selectCurrency','Việt Nam Đồng (VND)');
    I.fillField(label='Benefit Name','CHI PHÍ Y TẾ DO TAI NẠN');
    I.fillField(label='Benefit Code','MAC101');
    I.click('//*[@id="applyType"]/label["Day"]');
    I.click('//*[@id="applyWaitingPeriod"]'); 
    I.fillField('//*[@id="applyUnit"]','-1');
    I.click('//*[@id="billingType"]/label["Yearly"]');
    I.fillField('//*[@id="minSumAssured"]','-50,000,000');
    I.fillField('//*[@id="maxSumAssured"]','-100,000,000');
    I.click('OK');
    I.dontSeeElement('.ant-form-explain');

});

Scenario('Create a new benefit - EN', (I) => {
    I.amOnPage('http://52.15.139.169:8000/#/benefits');
    I.see('Benefits');
    I.click('//*[@id="btnAddBenefit"]');
    I.see('Add Benefit');
    I.click('.selectLanguage');
    I.fillField('.selectLanguage','English');
    I.click('.selectCurrency');
    I.fillField('.selectCurrency','US Dollar (USD)');
    I.fillField(label='Benefit Name','MEDICAL EXPENSE DUE TO ACCIDENT');
    I.fillField(label='Benefit Code','MAC101');
    I.click('//*[@id="applyType"]/label["Day"]');
    I.click('//*[@id="applyWaitingPeriod"]');
    I.fillField('//*[@id="applyUnit"]','1');
    I.click('//*[@id="billingType"]/label["Yearly"]');
    I.fillField('//*[@id="minSumAssured"]','-50,000,000');
    I.fillField('//*[@id="maxSumAssured"]','-100,000,000');
    I.click('OK');
    I.dontSeeElement('.ant-form-explain');
    
});