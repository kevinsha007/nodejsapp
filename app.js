var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Test");
});

app.listen(4000);
