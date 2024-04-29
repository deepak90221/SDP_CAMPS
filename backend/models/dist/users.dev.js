"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String
});
var UserModel = mongoose.model('User', UserSchema); // Change the model name to 'User'

module.exports = UserModel; // Export the UserModel