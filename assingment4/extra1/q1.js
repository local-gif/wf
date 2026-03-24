const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', (req, res) => {
    const employee = {
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        salary: req.body.salary
    };

    res.render('result', { employee });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
