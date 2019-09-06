const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/items');

// BodyParser Middleware
app.use(bodyParser.json());

// Connect to Database
mongoose.connect('mongodb://localhost/shopping_list', { useNewUrlParser: true })
    .then(() => console.log('connected to database'))
    .catch(err => console.log(err));

// Use Routes
app.use('/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server started'));
