module.exports = function(app){
    users = [];

    app.get('/user', function (req, res) {
        res.send(users);
    });

    app.post('/user/', function (req, res) {
        const user = req.body;
        user.id = users.length;
        users.push(user);
        res.send(users);
    });

    app.get('/user/:id', function (req, res) {
        const user = users[req.params.id];
        res.send(user);
    });
};


