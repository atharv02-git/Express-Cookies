const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
app.use(cookieParser('secretCookie'));

app.get('/greet', (req, res) => {
    const { name = 'Joaquin' } = req.cookies;
    res.send(`Hey there ${name}`);
})

app.get('/cookies', (req, res) => {
    res.cookie('name', 'Atharv Bhandare')
    res.cookie('animal', 'harlequin shrimp')
    res.send('Sent you a cookie')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('Sent your signed cookies')
})

app.get('/verifySigned', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies)
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000')
})