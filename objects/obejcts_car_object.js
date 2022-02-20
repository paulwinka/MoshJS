const car = new Car(80);
console.log(car.getSpeed());

car.setSpeed(100);
console.log(car.getSpeed());

car.stop();
console.log(car.getSpeed());

function Car(speed) {
  this.speed = speed;
  this.stop = function () {
    this.speed = 0;
  };
  this.setSpeed = function (speed) {
    this.speed = speed;
  };
  this.getSpeed = function () {
    return this.speed;
  };
}
