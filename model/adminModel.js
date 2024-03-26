const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  phone: {
    type: String
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  department: {
    type: String,
  },
  verified_email: {
    type: Boolean,
    default: false,
  },
  verified_mobile: {
    type: Boolean,
    default: false,
  },
},
  { timestamps: true }
)

module.exports = mongoose.model("admin",adminSchema);
