const addresses = [
  { street: 'Nashua', city: 'Florissant', zipCode: 63033 },
  { street: 'Kinard', city: 'Pensacola', zipCode: 32507 },
];

const showAddress = (address) => {
  for (let key in address) console.log(key, address[key]);
};

showAddress(addresses);
