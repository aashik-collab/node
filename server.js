const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const chalk = require('chalk');
const app = require('./app');

dotenv.config({ path: path.join(__dirname, '/config', '/.env') });

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';

// connecting to database
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
   console.log(chalk.bold.blue('mongodb connected'));
});

// startng development server
app.listen(PORT, () => {
   console.log(chalk.bold.yellow('server is running on port ' + PORT));
});
