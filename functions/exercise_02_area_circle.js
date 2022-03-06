// create an object literal that uses radius to get another property, like area, which is

const circle = {
  radius: 4,
  get area() {
    return Math.pow(this.radius, 2) * Math.PI;
  },
};

circle.radius = 4;
console.log(circle.area);
