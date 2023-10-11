const express = require("express");
const router = express.Router();

const{
  addPayment, getPaidClients
} =require('../services/payments');

router.post("/", addPayment);
router.get("/", getPaidClients)

module.exports = router