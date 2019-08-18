const testData = require('./testData.json')

const firstNameData = testData.firstNames;
const lastNameData = testData.lastNames;
const streetNameData = testData.streetNames;
const cityData = testData.cities;
const countyData = testData.counties;
const postcodeData = testData.postcodes;

const markovChain = () => {
  let length = Object.keys(firstNameData).length
  return length;
}

console.log(markovChain)