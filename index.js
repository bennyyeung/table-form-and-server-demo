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

app.use(express.urlencoded({entended: true}))
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Oh no, Error!!');
    }
});

app.listen(3000, ()=> {
    console.log("On Port 3000!")
})