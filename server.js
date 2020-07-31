const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

// Load DB file
const mongoDB = require('./config/db');

// connect to DB
mongoDB();

const app = express();

// Load Routes
const auth = require('./routes/auth');
const users = require('./routes/users');
const contacts = require('./routes/contacts');

// Mount Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/contacts', contacts);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(
    `Server Started in Port ${process.env.PORT} on ${process.env.NODE_ENV} mode`
  )
);

// Handle Unhandled Rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close Server and Exit
  server.close(() => process.exit(1));
});
