"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class sellable {
    constructor() {
        this.cart = [];
    }
    addTocart(product) {
        this.cart.push(product);
    }
}
const x = new sellable();
const y = new sellable();
x.addTocart({ name: 'hlw', type: 'sem1' });
console.log(x);
y.addTocart({ name: 'f', author: 'g', subject: 'c' });
console.log(y);
