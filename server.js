const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const user = require('./routes/user');

const app = express();

dotenv.config({
    path: './config/config.env'
});

connectDB();

app.use('/api/todo/auth', user);
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.listen(PORT,
    console.log(`Server running on port: ${PORT}`.blue));