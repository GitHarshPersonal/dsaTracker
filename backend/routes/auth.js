const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "this@is@mysecret";

// Create user POST /createuser
router.post(
  "/createuser",
  [
    body("name", "Name must be atleast 3 characters").isLength({ min: 3 }),
    body("email", "Invalid email type").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const validErrors = validationResult(req);
    if (!validErrors.isEmpty()) {
      success = false;
      return res.send(400).json({ success, errors: validErrors.array() });
    }

    try {
      // hashing
      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);

      User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
        .then((user) => {
          data = {
            user: {
              id: user.id,
            },
          };

          const authToken = jwt.sign(data, JWT_SECRET); // create a token

          success = true;
          res.json({ success, authToken }); // send a response
        })
        .catch((err) => {
          console.log(err); // if email is already taken this will send an error
          success = false;
          res.json({ success, msg: "Email already taken" }); // validator can't check for unique emails
        });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

// login the user POST /login
router.post(
  "/login",
  [
    body("email", "Invalid Email Type!").isEmail(),
    body("password", "Please enter your password").exists(),
  ],
  async (req, res) => {
    // check for errors while validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    // check for errors while validation

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user) {
        success = false;
        return res.status(400).send({ success, error: "Invalid Credentials" });
      }

      const passComapare = await bcrypt.compare(password, user.password);
      if (!passComapare) {
        success = false;
        return res.status(400).send({ success, error: "Invalid Credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET); // create a token

      success = true;
      res.json({ success, authToken }); // send a response
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Get user POST /getuser
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    success = true;
    res.send({ success, user });
  } catch (error) {
    console.log(error);
    success = false;
    res.status(500).send({ success, msg: "Internal server error" }); // this will occur in case of internal server error
  }
});

module.exports = router;
