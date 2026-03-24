// server.js

const http = require('http');          
const myModule = require('./modules'); 

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h2>Custom Node.js Module Example</h2>");
    res.write("<p>Today's Date and Time:</p>");
    res.write("<b>" + myModule.getDateTime() + "</b>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
