const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {

    let visits = req.cookies.v;

    if (visits) {
        visits = parseInt(visits) + 1;
    } else {
        visits = 1;
    }

    res.cookie('v', visits, { maxAge: 24 * 60 * 60 * 1000 }); // 1 day

    res.send(`
        <h1>Visit Counter</h1>
        <p>You have visited this page ${visits} times.</p>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
