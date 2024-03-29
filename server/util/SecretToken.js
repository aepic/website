require("dotenv").config({ path: "./config.env" });
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: 1 * 24 * 60 * 60,
  });
};