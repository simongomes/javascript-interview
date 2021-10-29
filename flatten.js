// Flatten nested JavaScript Object

let person = {
  name: "Simon",
  country: "Bangladesh",
  address: {
    city: "Dhaka",
    area: {
      lane: 5,
      road: 10,
    },
  },
};

const amazonFlattent = (obj) => {
  let result = {};
  for (const i in obj) {
    if (typeof obj[i] === "object") {
      const innerObject = amazonFlattent(obj[i]);
      for (const j in innerObject) {
        result[i + "." + j] = innerObject[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};

console.log(amazonFlattent(person));

// Flatten Nested Arrray

let person = [
  "Simon",
  "Gomes",
  ["Farmgate", "Monipuripara"],
  ["Country", ["Dhaka", "Bangladesh"]],
];

const amazonArrayFlattent = function (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let innerArray = amazonArrayFlattent(arr[i]);
      for (let j = 0; j < innerArray.length; j++) {
        result.push(innerArray[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(amazonArrayFlattent(person));
