function memoize(func, context) {
  const results = {};
  return function () {
    var argsIndex = JSON.stringify(arguments);
    if (!results[argsIndex]) {
      results[argsIndex] = func.call(context || this, ...arguments);
    }
    return results[argsIndex];
  };
}

// We may also define memoize function like following
/*
  function memoize(func, context) {
  const results = {};
  return function (...args) {
    var argsIndex = JSON.stringify(args);
    if (!results[argsIndex]) {
      results[argsIndex] = func.call(context || this, ...args);
    }
    return results[argsIndex];
  };
}
*/

function clamzyProduct(num1, num2) {
  for (let i = 0; i < 99999999; i++) {}

  return num1 * num2;
}

const memoizedClamzyProduct = memoize(clamzyProduct);

console.time("First Call");
console.log(memoizedClamzyProduct(9467, 7649));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizedClamzyProduct(9467, 7649));
console.timeEnd("Second Call");
