const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.get('/greet', (req, res) => {
    const { name = 'Joaquin' } = req.cookies;
    res.send(`Hey there ${name}`);
})

app.get('/cookies', (req, res) => {
    res.cookie('name', 'Atharv Bhandare')
    res.cookie('animal', 'harlequin shrimp')
    res.send('Sent you a cookie')
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000')
})