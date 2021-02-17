function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat: () => {
    console.log("mom mom mom")
  },
  describe: () => {
    console.log('my name is ' + this.name)
  }
};