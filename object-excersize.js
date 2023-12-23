// 1
const products = {
  a: 1,
  b: 2,
  c: 3,
};
const getEntries = (obj) => {
  const result = [];
  for (const key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
};
console.log(getEntries(products));

// 2
const getKeys = (obj) => {
  const result = [];
  for (const key in obj) {
    result.push(key);
  }
  return result;
};
console.log(getKeys(products));

// 3

const getValues = (obj) => {
  const result = [];
  for (const key in obj) {
    result.push(obj[key]);
  }
  return result;
};
console.log(getValues(products));
