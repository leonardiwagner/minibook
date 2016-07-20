events = [];

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/timeline', function (req, res) {
    res.send(events);
});

app.post('/timeline', function (req, res) {
    const event = req.body;
    events.push(event);
    res.send('OK');
});

app.listen(3000);
console.log('minibook api listening on :3000');