const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String
});

const UserModel = mongoose.model('User', UserSchema); // Change the model name to 'User'
module.exports = UserModel; // Export the UserModel
