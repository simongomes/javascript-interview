const calc = {
  total: 0,
  add(value) {
    this.total += value;
    return this;
  },
  subtruct(value) {
    this.total -= value;
    return this;
  },
  multiply(value) {
    this.total = this.total * value;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtruct(30).add(10);
console.log(result.total);
