const markovChain = (dataset, length) => {
  const arrayLength = !length ? dataset.length : length;
  const blankArray = Array(arrayLength).fill(null);
  let randomisedArray = blankArray.map((val, i) => {
    let randomIndex = Math.floor(Math.random() * (dataset.length));
    const randomVal = dataset[randomIndex];
    return randomVal;
  })
  console.log(randomisedArray)
  return randomisedArray;
}

module.exports = markovChain;
