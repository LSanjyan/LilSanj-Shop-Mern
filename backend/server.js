const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("./models/userModel");

const SECRET_KEY = "super-secret-key";

// connect to express app
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// connect to MongoDB
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

db.on("open", () => console.log("mongo connected!"));
db.on("close", () => console.log("mongo disconnected"));

// middleware
//app.use(express.static(path.join(__dirname, "public")));

//SCHEMA

//Routes
//User registration
//Post registration

app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});
// //GET Registered Users
app.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users" });
  }
});

//Get Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Express app running on port ${port}`));
