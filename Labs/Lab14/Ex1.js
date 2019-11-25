var fs = require('fs');

var filename = 'user_data.json';

var data = fs.readFileSync(filename, 'utf-8');

var users_reg_data = JSON.parse(data); // Takes a string and converts it into object or array

console.log(users_reg_data.itm352.password); // Possible way to write identifiers

