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
      
      // base case
      if (counter >= dataset[randomise(dataset.length)].length) return randomStrArr;

      // recursive case
      randomStrArr.push(dataset[randomise(dataset.length)].slice(counter, counter + 1));
      counter++;
      randomiseCharacters();
    };

    randomiseCharacters();
    return randomStrArr.join('');
  });
  console.log(randomisedArray)
  return randomisedArray;
};

module.exports = { markovChain, randomise };