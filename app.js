const multer = require('multer');
const express = require('express');
const app = express();
const upload = multer();

const userRoutes = require('./components/user/userRoutes');
const roomRoutes = require('./components/room/roomRoutes');
const hallRoutes = require('./components/hall/hallRoutes');

// body parser
app.use(express.json());

app.use('/api/users', upload.none(), userRoutes);
app.use('/api/rooms', upload.none(), roomRoutes);
app.use('/api/halls', upload.none(), hallRoutes);

module.exports = app;
