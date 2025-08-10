const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, '../client')));

// A simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Node.js API!' });
});

// For any other route, serve the index.html from the client directory
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
