var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/images/Facebook.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images', 'Facebook.png'));
});

app.get('/ui/images/Gmail.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images', 'Gmail.ico'));
});

app.get('/ui/images/mypic.webp', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images', 'JMax.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
