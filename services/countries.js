const Countries = require('../models/countries')

const addCountry = (req, res) => {
  try {
    if (!!req && !!req.body) {
      const data = req.body;
      Countries.create({
        countryName: data.selectedCountry,
        gender: data.gender,
        age: data.age,
        notAllowedCountries: data.notAllowedCountries,
        reasons: data.reasons
      }).then(result => {
        return res.status(200).json({ success: true, data: result })
      })
    }
  }
  catch (error) {
    return res.status(500).json({ success: false, error: { message: error } })
  }
}

const getCountriesDetails = (req, res) => {
  Countries.find({ }).then(result => {
    return res.status(200).json({ success: true, data: result })
  }).catch(error => {
    return res.status(500).json({ success: false, error: { message: error } })
  })
}

const getAvailableCountries = (req, res) => {
  Countries.find({ }).then(result => {
    let availableCountries = []
    result.map(country => availableCountries.push(country.countryName ))
    return res.status(200).json({ success: true, data: availableCountries })
  }).catch(error => {
    return res.status(500).json({ success: false, error: { message: error } })
  })
}

const checkEligibility = (req, res) => {
  const { data } = req.query;
  Countries.find({}).then(result => {
    const selectedCountry = result.find((item) => item.countryName === data.selectedCountry)
    if(selectedCountry.reasons.includes(data.reasons) && !(selectedCountry.notAllowedCountries.includes(data.nationality)) ){
      let response = {
        eligibility: "Congratulations, you're  eligible for this country."
      }
      return res.status(200).json({ success: true, data: response })
    }
    else{
      let response = {
        eligibility: "Oop's you're not eligible for this country.",
        countries:[]
      }
      let otherCountries = []
      result.map((item)=>{
        if(item.reasons.includes(data.reasons) && !(item.notAllowedCountries.includes(data.nationality))){
          otherCountries.push(item.countryName)
        }
      })
          response.countries = otherCountries
      return res.status(200).json({ success: true, data: response })
    }
  }).catch(error => {
    return res.status(500).json({ success: false, error: { message: error } })
  })
}

module.exports = {
  addCountry,
  getCountriesDetails,
  getAvailableCountries,
  checkEligibility
}