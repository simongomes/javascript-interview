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
