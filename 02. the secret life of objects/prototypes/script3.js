String.prototype.toString = function () {
  console.log(this)
  return this.String + '.';
};

console.log('Ola'.toString());
