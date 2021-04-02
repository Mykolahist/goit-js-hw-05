class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

    getPrice() {
        return this.price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }
}

console.log(Car.prototype.hasOwnProperty('getPrice'));
console.log(Car.prototype.hasOwnProperty('changePrice'));
console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));