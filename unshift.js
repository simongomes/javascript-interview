// Array Unshift Polyfill

// Basic unshift

let arr = [1, 2, 3, 4, 5];

// arr.unshift(10);

// console.log(arr);

// Polyfil

Array.prototype.simonUnshift = function (number) {
  if (!number) return;
  this[this.length] = 0;
  let temp = [...this];
  for (let i = 1; i < temp.length; i++) {
    this[i] = temp[i - 1];
  }
  this[0] = number;
};

arr.simonUnshift(10);

console.log(arr);
