const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  profilePicture: {
    type: String,
  },

  joinDate: {
    type: Date,
    default: Date.now,
  },

  sendFollowRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  verificationToken: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
