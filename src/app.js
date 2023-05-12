// Initializations
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

// Settings
const app = express();
const port = process.env.PORT || 3000;
app.set('routes', path.join(__dirname, 'routes'));

// Statics
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/words'));

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err));

// Server is listening
app.listen(port, () => {
  console.log(`DOMMAN app listening on port http://localhost:${port}/`);
});
