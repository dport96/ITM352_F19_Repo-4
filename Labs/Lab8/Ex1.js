var age = 21;
/*
while (number < age) {
    number++;
    if (number > (age/2)) {
       console.log("Don't ask how old I am!");
        process.exit();
    }
    console.log(`Are you ${number} years old?`);
}
console.log(`You must be ${number} years old!`);
*/

for (var number = 50; number >= age; number--) {
    console.log(`Are you ${number} years old?`);
}
console.log(`You must be ${number} years old!`);