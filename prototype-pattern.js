let Human = function () {
    this.legs = 2;
    this.hands = 2;
    this.eyes = 2;
}

Human.prototype.gender = 'female';

let gent = new Human();
let lady = new Human();

gent.__proto__.gender = 'male';

console.log(lady.gender);
// console.log(lady.gender);
// console.log(new Human());