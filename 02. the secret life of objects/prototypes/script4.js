function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

Rabbit.prototype.teeth = 'small';

const killerRabbit = new Rabbit('Killer');
const blackRabbit = new Rabbit('Black');

killerRabbit.speak('Ola');
killerRabbit.teeth = 'long, sharp, and bloody';
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
