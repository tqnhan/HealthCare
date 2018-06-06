
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    
    inputValidation: function* (benefitError, field , content) {
        let ErrorText = "";
        benefitError.forEach(function(err) {

            if (field == err.fieldname) {
                if(content.length == 0) {
                    ErrorText += err.errorMissing;
                };
                if(typeof content == 'number' ){
                    if(content < 0 ) {
                        ErrorText += err.errorValue;
                    }
                };
                if (typeof content == 'string') { 
                    if(content.length > 10  & field == 'benefit_code') {
                        ErrorText += err.errorChar;
                    }
                };          
            };
        });

        if (ErrorText.length > 0) {
            return console.log(field + ': Error - ' + ErrorText);
        } else {
            return console.log(field + ': Passed');
        };

    },

    compareSA: function* (benefitError,field, minSA, maxSA) {
        benefitError.forEach(function(err) {
            if (field == err.fieldname) {
                if (minSA >= maxSA) {
                    return console.log(field + ':' + err.errorSA);
                } else {
                    return console.log(field + ': Passed');
                };
            };
        });
    },
    
  });
};
