const express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set the public(or static if you prefer to call it) route
app.use(express.static("static"));


app.get("/", (req, res) => {
    res.render("login", {
        title: "Login"
    });
});

app.get("/home", (req, res) => {
    res.render("home", {
        title: "Home"
    });
});

app.listen("3000");
console.log("website is running on localhost:3000");