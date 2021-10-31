const person = {
  firstName: "Simon",
  lastName: "Gomes",
};

function fullName(city, country) {
  return (
    this.firstName + " " + this.lastName + " from " + city + ", " + country
  );
}

Function.prototype.amazonCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(...args);
};

Function.prototype.amazonApply = function (scope, args) {
  scope._this = this;
  return scope._this(...args);
};

Function.prototype.amazonBind = function (scope, ...args) {
  scope._this = this;
  return function () {
    return scope._this(...args);
  };
};

console.log(fullName.amazonCall(person, "Dhaka", "Bangladesh"));
console.log(fullName.amazonApply(person, ["Dhaka", "Bangladesh"]));

const printFullName = fullName.amazonBind(person, "Dhaka", "Bangladesh");

console.log(printFullName());
