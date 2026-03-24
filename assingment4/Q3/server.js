const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static HTML
app.use(express.static('public'));

// Download route
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'sample.txt');

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        return res.status(404).send("Error: File not found.");
    }

    // Send file as attachment
    res.download(filePath, 'sample.txt', (err) => {
        if (err) {
            console.error("Download error:", err);
            res.status(500).send("Error downloading the file.");
        }
    });
});

// Global error handler
app.use((req, res) => {
    res.status(404).send("Page not found.");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
