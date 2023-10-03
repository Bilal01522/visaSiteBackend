const mongoose = require('mongoose')

const Countries = new mongoose.Schema({
    countryName: {
      type: String,
      required: true
    },
    gender: {
      type: String
    },
    age: {
      type: String
    },
    notAllowedCountries: {
      type: Array
    },
    reasons: {
      type: Array
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Countries", Countries);