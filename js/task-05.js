function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
    return this.price;
}

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
}

console.log(Car.prototype.hasOwnProperty('getPrice'));
console.log(Car.prototype.hasOwnProperty('changePrice'));