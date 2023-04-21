const mongoose = require("mongoose");
const NotificationsSchema = mongoose.Schema({
  notification: {
    type: Object,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  is_seen: {
    type: Boolean,
    default: false,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

const NotificationModel = mongoose.model("notification", NotificationsSchema);

module.exports = NotificationModel;
