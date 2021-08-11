const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Home!!!')
});

app.listen(3002, () => {
    console.log('Hello!!!')
});
