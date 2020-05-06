const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user');
const consultantRoutes = require('./routes/consultant');
const messageRoutes = require('./routes/message');
require('dotenv').config();

const PORT = process.env.port || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// -- ROUTES --
app.use('users', userRoutes);
app.use('consultants', consultantRoutes);
app.use('messages', messageRoutes);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`))