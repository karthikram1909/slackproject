const mongoose = require('mongoose');

// Define the schema for users
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true }, // Username field, unique constraint ensures no duplicate usernames
  password: String, // Password field
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create a model based on the schema
const UserModel = mongoose.model('User', UserSchema);

// Export the model to be used elsewhere in your application
module.exports = UserModel;
