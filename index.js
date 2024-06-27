const express = require('express');
const path = require('path')
const mongoose = require('mongoose')

const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/sports-register', {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('register')
})

app.listen(3000, ()=> {
    console.log("On Port 3000!")
})