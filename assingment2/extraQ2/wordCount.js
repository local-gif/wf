
const fs = require("fs");

const fileName = process.argv[2];
const searchWord = process.argv[3];

if (!fileName || !searchWord) {
    console.error("Usage: node wordCount.js <filename> <word>");
    process.exit(1);
}

fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
        if (err.code === "ENOENT") {
            console.error("Error: File not found");
        } else {
            console.error("Error reading file:", err.message);
        }
        return;
    }

    const escapedWord = searchWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`\\b${escapedWord}\\b`, "gi");

    const matches = data.match(regex);
    const count = matches ? matches.length : 0;

    console.log(`Word "${searchWord}" occurs ${count} times.`);
});
