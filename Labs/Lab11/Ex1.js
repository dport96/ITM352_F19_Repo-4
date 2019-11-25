/* Exercise 1
"a;b;c;d".split();
*/

/* Excercise 2 
attributes  =  "Kobe;21;21.5;-20.5";
mySeparator = ';';
parts = attributes.split(mySeparator);
*/

//Exercise 3
mySeparator = ';';
parts = ['Kobe', 21, 21.5, -20.5];
/*for (var i = 0; i < parts.length; i++) {
    console.log(`${parts[i]} check_string_for_nonNegInt ${check_string_for_nonNegInt(parts[i], true)}`);
}
console.log(parts.join(mySeparator));
*/

// Exercise 4
function check_string_for_nonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);
}

// Exercise 5
function printIt(item, index) {
    console.log(`${item} check_string_for_nonNegInt ${check_string_for_nonNegInt(item, true)}`);
}
parts.forEach(function (item, index) {
    console.log((typeof item == 'string' && item.length > 0) ? true : false);
})