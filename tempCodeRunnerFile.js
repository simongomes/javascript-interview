const promiseA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 2000);
  });
};

const promiseB = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 2000);
  });
};

function customPromiseAll(promises) {
  const result = [];

  return new Promise((resolve, reject) => {
    for (let index = 0; index < promises.length; index++) {
      promises[index]
        .then((res) => {
          result.push(res)
        if(index === promises.length -1) resolve(result)
        })
        .catch((err) => reject(err));
    }
  });
}

// Promise.all([promiseA(), promiseB("hello")]).then((res) =>
//   console.log(res)
// );

customPromiseAll([promiseA(), promiseB("hello")]).then((res) =>
  console.log(res)
);
