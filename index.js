var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.get('/',function(req, res){//get,put,post,delete
      res.sendFile(__dirname + '/public/index.html');
    });
app.listen(port);
console.log('public on port 80');
