let Human = function () {
    this.legs = 2;
    this.hands = 2;
    this.eyes = 2;
}

Human.prototype.gender = 'female';

let gent = new Human();
let lady = new Human();

// ? Adding a property will add/override it to clone
gent.gender1 = 'male';
lady.gender1 = 'female';

// ? Adding a prototype will add/override it to original
gent.__proto__.gender = 'male';
lady.__proto__.gender = 'female';

console.log(lady.gender);
console.log(gent.gender);
console.log(lady.gender1);
console.log(gent.gender1);