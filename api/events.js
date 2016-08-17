module.exports = function(app){
    events = [];

    app.get('/event', function (req, res) {
        res.send(events);
    });

    app.post('/event/', function (req, res) {
        const event = req.body;
        event.id = events.length;
        event.likes = 0;
        events.push(event);
        res.send(event);
    });

    app.get('/event/:id/like', function (req, res) {
        const event = events[req.params.id];
        event.likes = event.likes + 1;
        res.send(event);
    });
};