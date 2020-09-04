const express = require('express');
var bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var users = [
    { id: 1, name: "Le Tang Co" },
    { id: 2, name: "Truong Thi My Linh" },
    { id: 3, name: "A" }
];

app.get('/user', (req, res) => {
    var key = req.query.q || "";
    var result = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
    })
    res.render('Hello', {
        users: result
    });
});

app.get('/user/insert', function (req, res) {
    res.render('insert');
});

app.post('/user/insert', function (req, res) {
    console.log(req.body)
    users.push(req.body);
    // Chuyển người dùng sang trang user
    res.redirect('/user');
});

app.listen(port, () => {
    console.log("server is listening in " + port);
})
