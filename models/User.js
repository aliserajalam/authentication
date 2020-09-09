const mongoose = require('mongoose');

// User schema structure
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create a model based on the schema
const User = mongoose.model('User', UserSchema);

// Export the model for use in other file
module.exports = User;
