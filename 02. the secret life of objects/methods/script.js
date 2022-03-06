const rabbit1 = {name: 'Eufránio'};
const rabbit2 = {name: 'Creuma'};

rabbit1.speak = function (line) {
  console.log(`The rabbit ${this.name} says '${line}'`);
};

rabbit2.speak = function (line) {
  console.log(`The rabbit ${this.name} says '${line}'`);
};

rabbit1.speak('Hello world');
rabbit2.speak('Hello mart');
