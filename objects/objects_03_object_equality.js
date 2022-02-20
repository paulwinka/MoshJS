let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const areEqual = (address1, address2) => {
  const keys1 = Object.keys(address1);
  const keys2 = Object.keys(address2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) if (address1[key] !== address2[key]) return false;
  return true;
};
const areSame = (address1, address2) => {
  return address1 === address2 ? true : false;
};

// console.log(areEqual(address1,address2));
console.log(`areEqual: ${areEqual(address1, address2)}`);
console.log(`areSame: ${areSame(address1, address2)}`);
