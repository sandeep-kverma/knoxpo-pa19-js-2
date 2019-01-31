const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
    {
      name: "Jon",
      email: "jon@gmail.com",
      mobile: "9874563210",
      jobTitle: "Tester"
    },
    {
      name: "Jack",
      email: "jack@gmail.com",
      mobile: "9877893210",
      jobTitle: "Developer"
    },
    {
      name: "Sharon",
      email: "sharon@gmail.com",
      mobile: "7884563210",
      jobTitle: "Manager"
    }
];

// Routes

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users', (req, res) => {
    res.render('users', {users: users});
});

app.post('/users', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let jobTitle = req.body.jobTitle;
    let newUser = { name: name, email: email, mobile: mobile, jobTitle: jobTitle };
    users.push(newUser);
    res.redirect('/users');
});

app.get('/users/new', (req, res) => {
    res.render('new');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});