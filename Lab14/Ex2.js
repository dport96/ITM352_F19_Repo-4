var fs = require('fs');

var filename = 'user_data.json';

if (fs.existsSync(filename)) {
    data = fs.readFileSync(filename, 'utf-8');

    console.log(filename + ' has ' + stats['size'] + ' characters'); //Possible way to write identifiers
    
    users_reg_data = JSON.parse(data); // Takes a string and converts it into object or array

    console.log(users_reg_data.itm352.password); // Possible way to write identifiers
} else {
    console.log(filename + ' does not exist!');
}