// config/connection.js
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb+srv://pamar:Computer4eva@cluster0.echw3.mongodb.net/socialNetworkDB?retryWrites=true&w=majority';

mongoose.connect(connectionString)
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports = mongoose.connection;