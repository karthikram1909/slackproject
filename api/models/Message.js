const mongoose = require('mongoose');

// Define the schema for messages
const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model for the sender
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model for the recipient
  text: String, // Message text
  file: String, // File attachment (if any)
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create a model based on the schema
const MessageModel = mongoose.model('Message', MessageSchema);

// Export the model to be used elsewhere in your application
module.exports = MessageModel;
