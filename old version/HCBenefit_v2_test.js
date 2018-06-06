
Feature('Benefit Feature');

let url = "http://52.15.139.169:8000/#/benefits";
let datainfo = new DataTable(['language','currency','benefit_name','benefit_code','ApplyType','Unit','WaitPeriod','BillType','MinSA','MaxSA']);
datainfo.add(['Tiếng Việt','Việt Nam Đồng (VND)','CHI PHÍ Y TẾ DO TAI NẠN','MA001','Day','1','Yes','Yearly','-50,000,00','-100,000,000']);
datainfo.add(['English','Việt Nam Đồng (VND)','MEDICAL EXPENSE DUE TO ACCIDENT','MA001','Day','1','No','Yearly','-50,000,00','-100,000,000'])

var optWaitPeriod = ["Yes", "No"];


Data(datainfo).Scenario('Create a new benefit', (I,current) => {
    I.amOnPage(url);
    I.wait(2);
    I.see('Benefits','.pageHeader___Pze-l');

    I.click('//*[@id="btnAddBenefit"]');
    I.see('Add Benefit');
    
    //Select language
    I.click('.selectLanguage');
    I.fillField('.selectLanguage',current.language);
    
    //Select currency
    I.click('.selectCurrency');
    I.fillField('.selectCurrency',current.currency);
    I.dontSee('Please select a currency!');

    //Enter benefit name
    I.fillField(label='Benefit Name',current.benefit_name);
    I.dontSee('Please enter a name for benefit!');

    //Enter benefit code
    I.fillField(label='Benefit Code',current.benefit_code);
    I.dontSee('Please enter a code for benefit!');

    //Choose apply type
    if (current.ApplyType == "Day") {
        I.click('.applyTypeday');
    } else if (current.ApplyType == "Accident") {
        I.click('.applyTypeaccident');
    }
    I.dontSee('Please select one apply type!');

    //Enter Unit value
    I.fillField('//*[@id="applyUnit"]',current.Unit);
    I.dontSee('Please set a unit value!');

    //Choose waiting period
    if (current.WaitPeriod == "Yes") {
        I.click('//*[@id="applyWaitingPeriod"]');
    }

    // Choice billing type
    if (current.BillType == "Monthly") { 
        I.click('.billingTypemonthly');
    } else if (current.BillType == "Yearly") {
        I.click('.billingTypeyearly');
    } else if (current.BillType == "Quarterly") {
        I.click('.billingTypequarterly');
    }
    I.dontSee('Please select one billing type!');

    //Enter min Sum Assured
    I.fillField('//*[@id="minSumAssured"]',current.MinSA);
    I.dontSee('Please set a min value!');

    //Enter max Sum Assured
    I.fillField('//*[@id="maxSumAssured"]',current.MaxSA);
    I.dontSee('Please set a max value!');

    pause();
    I.click('OK');
    
});