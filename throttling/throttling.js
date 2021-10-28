const throttle = function (callback, timeout = 3000) {
  let timer;

  return function () {
    let args = arguments;
    let context = this;
    if (!timer) {
      callback.call(context, args);
      timer = setTimeout(() => {
        timer = null;
      }, timeout);
    }
  };
};

const fetch = function () {
  console.log("Data Fetched!");
};

const fetchData = throttle(() => fetch());

const button = document.querySelector(".button");

button.addEventListener("click", function (e) {
  console.log(e);
  fetchData();
});
