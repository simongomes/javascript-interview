/**
 * Polyfill is a piece of code, that developer expects from a browser
 * to provide natively. If it's not available in the browser,
 * you being a developer, use your logics and implement the solution.
 */

let arr = [1, 2, 3, 4, 5];

// forEach
Array.prototype.amazonForEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.amazonForEach(function (value, index) {
  console.log(index, value);
});

// map
Array.prototype.amazonMap = function (callback) {
  let array = [];
  for (i = 0; i < this.length; i++) {
    array.push(callback(this[i], i, this));
  }
  return array;
};

let arr = [
  { name: "name", age: 20 },
  { name: "name", age: 21 },
  { name: "name", age: 20 },
  { name: "name", age: 25 },
];

const updatedArray = arr.amazonMap(function (value, index) {
  value.name = "Simon";
  return value;
});

console.log(updatedArray);

//push
Array.prototype.amazonPush = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

//filter
Array.prototype.amazonFilter = function (callback) {
  let array = [];
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      array.push(this[i]);
    }
  }
  return array;
};

let arr = [
  {
    name: "name",
    age: 20,
  },
  {
    name: "name",
    age: 21,
  },
  {
    name: "name",
    age: 20,
  },
  {
    name: "name",
    age: 25,
  },
];

const filteredArray = arr.amazonFilter(function (value) {
  return value.age === 20;
});

console.log(filteredArray);

let arr = [
  {
    name: "name",
    age: 20,
  },
  {
    name: "name",
    age: 21,
  },
  {
    name: "name",
    age: 20,
  },
  {
    name: "name",
    age: 25,
  },
];

let arr = [1, 2, 3, 4, 5];

// REDUCE
Array.prototype.amazonReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

console.log(
  arr.amazonReduce((a, b) => {
    return a + b;
  })
);
