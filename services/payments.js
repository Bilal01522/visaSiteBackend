const Payments = require('../models/payments')

const addPayment = (req, res) => {
  try {
    if (!!req && !!req.body) {
      const data = req.body;
      Payments.create({
        clientName: data.clientName,
        payment: data.payment,
        appliedCountry: data.appliedCountry,
        visaType: data.visaType
      }).then(result => {
        return res.status(200).json({ success: true, data: result })
      })
    }
  }
  catch (error) {
    return res.status(500).json({ success: false, error: { message: error } })
  }
}

const getPaidClients = (req, res) => {
  Payments.find({ }).then(result => {
    return res.status(200).json({ success: true, data: result })
  }).catch(error => {
    return res.status(500).json({ success: false, error: { message: error } })
  })
}


module.exports = {
  addPayment,
  getPaidClients
}