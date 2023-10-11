const mongoose = require('mongoose')

const Payments = new mongoose.Schema({
    clientName: {
      type: String,
      required: true
    },
    payment: {
      type: Number
    },
    appliedCountry: {
      type: String
    },
    visaType: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Payments", Payments);