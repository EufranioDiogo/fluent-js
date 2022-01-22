const isEven = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 0) {
    return true;
  }
  return isEven(number - 2);
};


console.log(`50 is Even? ${isEven(50)}`)
console.log(`4 is Even? ${isEven(4)}`)
console.log(`75 is Even? ${isEven(75)}`)
console.log(`6 is Even? ${isEven(6)}`)
