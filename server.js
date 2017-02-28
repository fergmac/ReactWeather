var express = require('express');

// Create our app

var app = express();
const PORT = process.env.PORT || 3000;

//express middleware
app.use(function (req, res) {
    if(req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});
//add functionality to express app
app.use(express.static('public'));

//start server
app.listen(PORT, function() {
    console.log('express server is up on port ' + PORT);
});