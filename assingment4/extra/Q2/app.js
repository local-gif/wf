const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set Pug as template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display form
app.get('/', (req, res) => {
    res.render('form');
});

// Route to handle POST data
app.post('/submit', (req, res) => {
    const employeeData = {
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        salary: req.body.salary
    };

    res.render('result', { employee: employeeData });
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
