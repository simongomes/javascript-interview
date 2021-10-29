// Default Array Reduce Function
const names = ["Simon", "Sumit", "Gomes"];

const result = names.reduce(function (prevValue, currentValue) {
  return prevValue + " " + currentValue;
}, "Jane");

console.log(result);

// REDUCE Polyfill
Array.prototype.amazonReduce = function (callback, initialValue) {
  let accumulator = initialValue ? initialValue : undefined;

  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback.call(undefined, accumulator, this[i], i);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

const names = ["Simon", "Sumit", "Gomes"];

const result = names.amazonReduce(function (prevValue, currentValue) {
  return prevValue + " " + currentValue;
}, "Jane");
console.log(result);
