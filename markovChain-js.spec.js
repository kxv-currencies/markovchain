const { markovChain, randomise } = require('./markovChain-js.js');

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
  it('randomises characters in array of single characters', () => {
    const dataset = ['a','b','c','d','e'];
    expect(markovChain(dataset, 5).length).toBe(5);
  });
  it('randomises characters in array using characters in array - keeping character positions and all 3 letters long', () => {
    const dataset = ['hat', 'cat', 'fab'];
    expect(markovChain(dataset, 1)[0].includes('a', 1)).toBeTruthy();
  });
  it('randomises characters in array using characters in array - keeping character positions if array items are all the same length', () => {
    const dataset = ['lollipop', 'sunshine', 'fabulous'];
    expect(markovChain(dataset, 1)[0].length).toBe(8);
  });
  it('randomises characters in array using characters in array - keeping character positions if array items are of different lengths', () => {
    const dataset = ['lolli', 'pop'];
    expect(markovChain(dataset, 1)[0].includes('o', 1)).toBeTruthy();
  });
  it('returns random array for larger dataset', () => {
    expect(markovChain(firstNameData, 1)[0].length).toBeGreaterThan(1);
  });
  it('returns larger random array for larger dataset', () => {
    expect(markovChain(firstNameData, 100)[0].length).toBeGreaterThan(1);
  });
});

describe('randomise', () => {
  it('returns 0', () => {
    expect(randomise(0)).toBe(0);
  });
  it('returns a random number between 0 and num given - not including num given', () => {
    expect(randomise(100)).toBeLessThan(100);
  });
});