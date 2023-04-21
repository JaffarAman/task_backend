const mongoose = require("mongoose");
const PaymentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  due_date: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  is_visible: {
    type: Boolean,
    default: true,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

const PaymentModel = mongoose.model("payment", PaymentSchema);

module.exports = PaymentModel;
