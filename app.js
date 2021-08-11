const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Home!!!')
});

const port = process.env.port || 3002
app.listen(port, () => {
    console.log('Hello!!!')
});
