const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', (req, res) => {
    const employee = {
        id: req.body.id,
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    };

    res.render('result', { employee });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
