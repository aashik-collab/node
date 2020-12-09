const express = require('express');
const app = express();

const userRoutes = require('./components/user/userRoutes');
const roomRoutes = require('./components/room/roomRoutes');

app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);

module.exports = app;
