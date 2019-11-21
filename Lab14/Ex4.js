var express = require('express');
var app = express();
var myParser = require("body-parser");
var fs = require('fs');
var filename = 'user_data.json';

app.use(myParser.urlencoded({ extended: true }));

if (fs.existsSync(filename)) {
    data = fs.readFileSync(filename, 'utf-8');

    stats = fs.statSync(filename)
    console.log(filename + ' has ' + stats.size + ' characters'); //Possible way to write identifiers

    users_reg_data = JSON.parse(data); // Takes a string and converts it into object or array

    console.log(users_reg_data.itm352.password); // Possible way to write identifiers
} else {
    console.log(filename + ' does not exist!');
}

// CHANGE /login to HTML
app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});

// CHANGE /login to HTML
app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log(request.body);
    // Checks if username exists already USE FOR LOGIN CHECK
    the_username = request.body.username;
    if (typeof users_reg_data[the_username] != 'undefined') {
        if (users_reg_data[the_username].password == request.body.password) {
            response.send(the_username + ' logged in!'); // Change to redirect to invoice html
        } else {
            response.redirect('/login'); // Write an alert to notify
        }
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));