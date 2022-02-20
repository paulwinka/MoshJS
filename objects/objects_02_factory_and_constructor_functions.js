
// factory function
const createAddress = (street, city, zipCode) => ({
  street,
  city,
  zipCode,
});

console.log(createAddress('Kinzard', 'Pensacola', 32507));

// constructor function, don't use arrow notation, it doesn't work! 
function AddressCreator(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let zither = new AddressCreator('zoom', 'boom', 78247);
console.log(zither);
