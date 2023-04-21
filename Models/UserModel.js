const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  device_id: {
    type: String,
    default: "",
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
