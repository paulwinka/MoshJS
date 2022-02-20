const myObject = { a: 1, b: 2, c: 3 };

const iterator = () => {
  for (let property in myObject) {
    console.log(`Property is: ${myObject[property]}`);
  }
};

iterator();
