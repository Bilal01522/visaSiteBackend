const mongoose = require('mongoose')

const Clients = new mongoose.Schema({
        name: {
            type: String
        },
        reason: {
            type: String
        },
        nationality: {
            type: String
        },
        selectedCountry: {
            type: String
        },
        gender: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Client", Clients);