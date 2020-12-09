const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const chalk = require('chalk');
const app = require('./app');

dotenv.config({ path: path.join(__dirname, '/config', '/.env') });

const PORT = process.env.PORT || 5000;
const MODE = process.env.MODE || 'DEVELOPMENT';
const MONGODB_URI_DEV = process.env.MONGODB_URI_DEV || 'mongodb://localhost:27017';
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
const MONGODB_URI = MODE === 'PRODUCTION' ? MONGODB_URI_PROD : MONGODB_URI_DEV;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(chalk.bold.blue('mongodb connected'));
});

app.listen(PORT, () => {
    console.log(chalk.bold.yellow('server is running on port ' + PORT));
});
