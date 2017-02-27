var express = require('express');

// Create our app

var app = express();
//add functionality to express app
app.use(express.static('public'));

//start server
app.listen(3000, function() {
    console.log('express server is up on port: 3000');
});