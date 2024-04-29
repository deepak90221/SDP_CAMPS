const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const UserModel = require("./models/users");

const app = express();
const PORT =process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/sdp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(error => console.error("MongoDB connection error:", error));

// Nodemailer transporter setup


// Registration endpoint
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await UserModel.create({ name, email, password: hashedPassword });
    console.log("User registered:", newUser);

    // Send verification email to the user
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: email,
      subject: "Verify your email address",
      html: `<p>Hi ${name},</p><p>Thank you for registering. Please verify your email address to complete the registration process.</p>`,
    });

    res.status(201).json({ message: "Registration successful", user: newUser });
  } catch (error) {
    console.error("Error occurred during registration:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the entered password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", userName: user.name });
  } catch (error) {
    console.error("Error occurred during login:", error);
    res.status(500).json({ error: "Login failed" });
  }
});
app.post("/curd",)

// Start server
app.listen(PORT,console.log(`Server running on the port number ${PORT}`));
