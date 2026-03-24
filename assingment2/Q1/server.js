const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }

    else if (req.method === "POST" && req.url === "/append") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const formData = querystring.parse(body);
            const file1 = path.join(__dirname, "files", formData.file1);
            const file2 = path.join(__dirname, "files", formData.file2);

            fs.readFile(file1, "utf8", (err, data) => {
                if (err) {
                    res.end("Error reading first file");
                    return;
                }

                fs.appendFile(file2, data, (err) => {
                    if (err) {
                        res.end("Error appending to second file");
                        return;
                    }

                    fs.unlink(file1, (err) => {
                        if (err) {
                            res.end("Error deleting first file");
                            return;
                        }

                        res.end("Content appended successfully and first file deleted!");
                    });
                });
            });
        });
    }


    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
