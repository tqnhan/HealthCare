
Feature('Benefit Feature');

let url = "http://52.15.139.169:8000/#/benefits";
let datainfo = new DataTable(['ScenInd','language','currency','benefit_name','benefit_code','ApplyType','Unit','WaitPeriod','BillType','MinSA','MaxSA']);
datainfo.add([1,'Tiếng Việt','Việt Nam Đồng (VND)','CHI PHÍ Y TẾ DO TAI NẠN','MA001','Day','1','Yes','Yearly','50000000','100000000']);
datainfo.add([2,'English','Việt Nam Đồng (VND)','MEDICAL EXPENSE DUE TO ACCIDENT','MA001','Day','1','No','Yearly','50000000','100000000']);
datainfo.add([3,'','','','','','','No','','','']);
datainfo.add([4,'English','Việt Nam Đồng (VND)','MEDICAL EXPENSE DUE TO ACCIDENT','MA001','Accident','-1','No','Monthly','-50000000','-20000000']);
datainfo.add([5,'English','Việt Nam Đồng (VND)','MEDICAL EXPENSE DUE TO ACCIDENT','MA001','Day','1','No','Yearly','100000000','50000000']);
datainfo.add([6,'English','Việt Nam Đồng (VND)','MEDICAL EXPENSE DUE TO ACCIDENT','MA001C1001010383','Accident','1','No','Quarterly','50000000','100000000']);

let ScenList = [
    {
        case: 1,
        desc: "PASS: create new benefit VN",
    },
    {
        case: 2,
        desc: "PASS: create new benefit EN",
    },
    {
        case: 3,
        desc: "FAILURE: Missing Value",
    },
    {
        case: 4,
        desc: "FAILURE: Negative amount",
    },
    {
        case: 5,
        desc: "FAILURE: Min SA greater than Max SA",
    },
    {
        case: 6,
        desc: "FAILURE: Benefit codes have more than 10 characters",
    }
];

let benefitError = [
    {
        fieldname: "currency",
        errorMissing: 'Please select a currency!',
    },
    {
        fieldname: "benefit_name",
        errorMissing: 'Please enter a name for benefit!',
    },
    {
        fieldname: "benefit_code",
        errorMissing: 'Please enter a code for benefit!',
        errorChar: 'Benefit codes should be within 10 characters!',
    },
    {
        fieldname: "ApplyType",
        errorMissing: 'Please select one apply type!',
    },
    {
        fieldname: "Unit",
        errorMissing: 'Please set a unit value!',
        errorValue: 'The field should be positive amount!',
    },
    {
        fieldname: "BillType",
        errorMissing: 'Please select one billing type!',
    },
    {
        fieldname: "MinSA",
        errorMissing: 'Please set a min value!',
        errorValue: 'The field should be positive amount!',
    },
    {
        fieldname: "MaxSA",
        errorMissing: 'Please set a max value!',
        errorValue: 'The field should be positive amount!',
    },
    {
        fieldname: "checkSA",
        errorSA: 'Min SA should be less than Max SA!',
    }
  ];

Before((I) => {
    I.amOnPage(url);
    I.wait(2);
    I.see('Benefits','.pageHeader___Pze-l');
    I.click('//*[@id="btnAddBenefit"]');
    I.see('Add Benefit');
})
// console.log('some text', datainfo.rows[scen.case - 1].data["ScenInd"]);
ScenList.forEach(function(scen) {
    if (scen.case != 0) {
        Scenario(scen.desc, function* (I) {
            let rowinfo = datainfo.rows[scen.case - 1].data

            I.click('.selectLanguage');
            I.fillField('.selectLanguage',rowinfo.language);
            I.click('.selectCurrency');
            I.fillField('.selectCurrency',rowinfo.currency);
            I.fillField(label='Benefit Name',rowinfo.benefit_name);
            I.fillField(label='Benefit Code',rowinfo.benefit_code);
            if (rowinfo.ApplyType == "Day") {
                I.click('.applyTypeday');
            } else if (rowinfo.ApplyType == "Accident") {
                I.click('.applyTypeaccident');
            };
            I.fillField('//*[@id="applyUnit"]',rowinfo.Unit);
            if (rowinfo.WaitPeriod == "Yes") {
                I.click('//*[@id="applyWaitingPeriod"]');
            };
            if (rowinfo.BillType == "Monthly") { 
                I.click('.billingTypemonthly');
            } else if (rowinfo.BillType == "Yearly") {
                I.click('.billingTypeyearly');
            } else if (rowinfo.BillType == "Quarterly") {
                I.click('.billingTypequartererly');
            };
            I.fillField('//*[@id="minSumAssured"]',rowinfo.MinSA);
            I.fillField('//*[@id="maxSumAssured"]',rowinfo.MaxSA);
            I.click('OK');

            // data input validation
            console.log('--Data input validation: scenario - '+ scen.desc);
            yield* I.inputValidation(benefitError,'currency',rowinfo.currency);
            yield* I.inputValidation(benefitError,'benefit_name',rowinfo.benefit_name);
            yield* I.inputValidation(benefitError,'benefit_code',rowinfo.benefit_code);
            yield* I.inputValidation(benefitError,'ApplyType',rowinfo.ApplyType);
            yield* I.inputValidation(benefitError,'Unit',Number(rowinfo.Unit));
            yield* I.inputValidation(benefitError,'BillType',rowinfo.BillType);
            yield* I.inputValidation(benefitError,'MinSA',Number(rowinfo.MinSA));
            yield* I.inputValidation(benefitError,'MaxSA',Number(rowinfo.MaxSA));
            yield* I.compareSA(benefitError,"checkSA",Number(rowinfo.MinSA),Number(rowinfo.MaxSA));

        });
    };
});
