var day = 15;
var month = "Sept";
var year = 1998;

var step1 = Math.floor(year % 100);
console.log("Last two digits of birth year is " + step1);

var step2 = Math.floor(98 / 4);
console.log("That number divided by 4 is " + step2);

var step3 = step1 + step2;
console.log("Now we add up those calculations to get " + step3);

if (month = "Jan") {
    var step5 = step3 + day;
    console.log(step5);
} else {
    var step4 = 0;
    var step6 = step3 + step4;
    var step7 = day + step6;
}
console.log(step7);
var step8 = (typeof step5 !== 'undefined') ? step5 : step7;

var isLeapYear;
if (step8) {
    
} else {
    
}