function findCommons(arr) {
  if (!arr.length) {
    return [];
  }

  const minNumber = Math.min(...arr);
  const commonElements = [];

  for (let i = 1; i <= minNumber; i++) {
    if (minNumber % i === 0) {
      if (arr.every((num) => num % i === 0)) {
        commonElements.push(i);
      }
    }
  }
  return commonElements;
}

findCommons(arr);
