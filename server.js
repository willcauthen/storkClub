//Server side JS

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var path = require('path');

// config codes
app.set ('view engine', 'ejs');
app.use("/static", express.static("public"));


app.get('/', function (request, response) {
	response.render('index');
});

app.listen(process.env.PORT || 5000, function (request, response) {
	console.log("The harvest is over, the summer is ended, and we are not saved");
});