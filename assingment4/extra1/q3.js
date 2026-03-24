const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('username', 'harshal', { maxAge: 24 * 60 * 60 * 1000 });
    res.send("<h2>Cookie 'username=harshal' is set</h2><a href='/get'>View Cookie</a>");
});

app.get('/get', (req, res) => {
    const username = req.cookies.username;

    if (username) {
        res.send(`
            <h2>Username from Cookie: ${username}</h2>
            <a href='/clear'>Clear Cookie</a>
        `);
    } else {
        res.send("<h2>No Username Cookie Found</h2>");
    }
});

app.get('/clear', (req, res) => {
    res.clearCookie('username');
    res.send("<h2>Cookie Cleared Successfully!</h2>");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
