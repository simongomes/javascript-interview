/**
 * The debounce() function forces a function to wait a certain amount of time before running again.
 */

function debounce(func, timeout = 3000) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, timeout);
  };
}

function saveData() {
  console.log("Data Saved");
}

const processData = debounce(() => saveData());

processData();
