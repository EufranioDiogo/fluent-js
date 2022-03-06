const protoMath = {
  increment(value) {
    this.total += value;
  },
};

const shopObjects = Object.create(protoMath);

shopObjects.total = 0;
shopObjects.thingsToBuy = [
  {
    name: 'Mouse',
    quantity: 2,
    price: 1000,
  },
  {
    name: 'Yogurt',
    quantity: 20,
    price: 200,
  },
];

shopObjects.thingsToBuy.map((product) =>
  shopObjects.increment(product.quantity * product.price)
);
console.log(shopObjects);
