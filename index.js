const express = require('express');
const app = express();
const chalk = require('chalk');
const logger = require('morgan');
const path = require('path');

const users = require('./models/Users.json')

const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/users', (req, res) => {
    res.render('main/users', {users});
});

app.get('/first', (req, res) => {
    res.render('main/home', { name: 'Roamin' });
});

app.get('/location/:color/:car', (req, res) => {
    const firstName = 'Roamin';
    const lastName = 'Romanowski';
    let places = [
        { city: 'San Diego', state: 'California' },
        { city: 'Puerto Vallarta', state: 'Mexico' },
        { city: 'Denver', state: 'Colorado' }
    ];
    const { color, car } = req.params;
    res.render('main/location', { color, car, places, firstName, lastName });
});

app.listen(port, () => {
    console.log(chalk.red(`App listening on port ${port}`));
});
