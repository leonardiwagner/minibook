var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

require('./events')(app);
require('./users')(app);

const port = 3000;
console.log("minibook api running on :" + port);

app.listen(port);