const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const user = {
    username: "admin",
    password: "1234"
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username.length > 6) {
        return res.send("Error: Username must not exceed 6 characters.");
    }

    if (username === user.username && password === user.password) {
        res.send("Login successful!");
    } else {
        res.send("Invalid username or password.");
    }
});

const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
