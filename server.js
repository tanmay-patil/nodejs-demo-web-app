const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Node server now started on port : ${port}`);
});

app.get('/', (req, res) => {
    res.send(`Welcome to Tanmay's Node Web App Home`);
});