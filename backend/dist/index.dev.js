"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var bcrypt = require("bcrypt");

var nodemailer = require("nodemailer");

var UserModel = require("./models/users");

var app = express();
var PORT = process.env.PORT || 8000; // Middleware

app.use(express.json());
app.use(cors()); // Connect to MongoDB

mongoose.connect("mongodb://localhost:27017/campus", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("MongoDB connected");
})["catch"](function (error) {
  return console.error("MongoDB connection error:", error);
}); // Nodemailer transporter setup
// Registration endpoint

app.post("/register", function _callee(req, res) {
  var _req$body, name, email, password, existingUser, hashedPassword, newUser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(UserModel.findOne({
            email: email
          }));

        case 4:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "User already exists"
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 9:
          hashedPassword = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(UserModel.create({
            name: name,
            email: email,
            password: hashedPassword
          }));

        case 12:
          newUser = _context.sent;
          console.log("User registered:", newUser); // Send verification email to the user

          _context.next = 16;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: "your-email@gmail.com",
            to: email,
            subject: "Verify your email address",
            html: "<p>Hi ".concat(name, ",</p><p>Thank you for registering. Please verify your email address to complete the registration process.</p>")
          }));

        case 16:
          res.status(201).json({
            message: "Registration successful",
            user: newUser
          });
          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](1);
          console.error("Error occurred during registration:", _context.t0);
          res.status(500).json({
            error: "Registration failed"
          });

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 19]]);
}); // Login endpoint

app.post("/login", function _callee2(req, res) {
  var _req$body2, email, password, user, isPasswordValid;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(UserModel.findOne({
            email: email
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            error: "User not found"
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          isPasswordValid = _context2.sent;

          if (isPasswordValid) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(401).json({
            error: "Invalid email or password"
          }));

        case 12:
          res.status(200).json({
            message: "Login successful",
            userName: user.name
          });
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](1);
          console.error("Error occurred during login:", _context2.t0);
          res.status(500).json({
            error: "Login failed"
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 15]]);
});
app.post("/curd"); // Start server

app.listen(PORT, console.log("Server running on the port number ".concat(PORT)));