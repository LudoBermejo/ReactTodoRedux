const express = require('express');

// Create our app
const app = express();

app.use(express.static('public'));

app.listen(3000, () => console.log('Express server is up on port 3000'));