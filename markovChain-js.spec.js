const markovChain = require('./markovChain-js.js');

const testData = require('./testData.json')

const firstNameData = Object.keys(testData.firstNames);
const lastNameData = Object.keys(testData.lastNames);
const streetNameData = Object.keys(testData.streetNames);
const cityData = Object.keys(testData.cities);
const countyData = Object.keys(testData.counties);
const postcodeData = Object.keys(testData.postcodes);

describe('markovChain-js', () => {
  it('returns array', () => {
    expect(markovChain([])).toEqual([]);
  });
  it('returns array same length of dataset if not given length', () => {
    expect(markovChain(['a']).length).toBe(1);
  });
  it('returns array of given length', () => {
    expect(markovChain(['a', 'b'], 1).length).toBe(1);
  });
  it('randomises characters in array', () => {
    const dataset = ['a','b','c','d','e'];
    expect(markovChain(dataset, 5).length).toBe(5);
  });
});