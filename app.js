const multer = require('multer');
const express = require('express');
const cors = require('cors');
const app = express();
const upload = multer();

const userRoutes = require('./components/user/userRoutes');
const roomRoutes = require('./components/room/roomRoutes');
const hallRoutes = require('./components/hall/hallRoutes');
const routes = require('./routes');

// cors
app.use(cors());
// body parser
app.use(express.json());

app.use('/api/users', upload.none(), userRoutes);
app.use('/api/rooms', upload.none(), roomRoutes);
app.use('/api/halls', upload.none(), hallRoutes);
app.use('/api', upload.none(), routes);

module.exports = app;
