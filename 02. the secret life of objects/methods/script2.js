function normalize() {
  console.log(this.coords.map((coord) => coord / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5 });
