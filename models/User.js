// o banco precisa de um schema base para apartir dele criar os novos, para isso o user.js

const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

module.exports = User;
