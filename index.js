const express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/css/style.css", (req, res) => {
    res.sendFile(__dirname + '/css/style.css');
});

app.get("/javascript/todoapp.js", (req, res) => {
    res.sendFile(__dirname + '/javascript/todoapp.js');
});

app.listen("3000");
console.log("localhost:3000");