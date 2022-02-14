const john = {
  fullName: 'John Smith',
  mass: 100,
  height: 213,
  calcBMI: function () {
    this.BMI = (this.mass / this.height) * this.height;
    return this.BMI;
  },
};

const mark = {
  fullName: 'John Smith',
  mass: 55,
  height: 153,
  calcBMI: function () {
    this.BMI = (this.mass / this.height) * this.height;
    return this.BMI;
  },
};
