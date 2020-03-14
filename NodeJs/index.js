const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
const employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyparser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(3030, () => console.log('Server Started At Port : 3030'));

app.use('/employees', employeeController);