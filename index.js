const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send('hello there')
})

app.get('/cookies', (req, res) => {
    res.cookie('name', 'Atharv Bhandare')
    res.send('Sent you a cookie')
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000')
})