const randomise = (num) => {
  return Math.floor(Math.random() * num)
};

const markovChain = (dataset, length) => {
  const arrayLength = !length ? dataset.length : length;
  const blankArray = Array(arrayLength).fill(null);

  let randomisedArray = blankArray.map((val) => {
    let counter = 0;

    let randomStrArr = [];

    const randomiseCharacters = () => {
      const filteredDataset = dataset.filter((data => randomStrArr[counter - 1] === data[counter - 1]));
      const currentDataset = (randomStrArr.length > 0 && filteredDataset > 0) ? filteredDataset : dataset;
      
      // base case
      if (counter >= dataset[randomise(dataset.length)].length) return randomStrArr;

      // recursive case
      randomStrArr.push(currentDataset[randomise(currentDataset.length)].slice(counter, counter + 1));
      counter++;
      randomiseCharacters();
    };

    randomiseCharacters();
    return randomStrArr.join('');
  });
  return randomisedArray;
};

module.exports = { markovChain, randomise };