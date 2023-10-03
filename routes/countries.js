const express = require("express");
const router = express.Router();

const{
  addCountry, getCountriesDetails, getAvailableCountries,checkEligibility
} =require('../services/countries');

router.post("/", addCountry);
router.get("/", getCountriesDetails)
router.get("/availableCountries", getAvailableCountries)
router.get("/eligibility", checkEligibility)

module.exports = router