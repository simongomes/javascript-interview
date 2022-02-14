/**
 * The debounce() function forces a function to wait a certain amount of time before running again.
 */

function debounce(func, timeout = 3000) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, timeout);
  };
}

function saveData(event) {
  console.log("Data Saved");
  console.log(event);
}

const processData = debounce((/* ...args */) => saveData(/* ..args */));

processData(/* args */);
