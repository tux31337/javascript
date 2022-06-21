function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
let array = ["바나나", "딸기", "포도", "딸기"];
const result = replace(array, "딸기", "복숭아");
console.log(result);

array = ["바나나", "키위", "포도", "키위"];
function elementCount(array, countElement) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === countElement) {
      cnt++;
    }
  }
  return cnt++;
}

console.log(elementCount(array, "키위"));

function existArray(array1, array2) {
  const result = new Array();
  for (let i = 0; i < array2.length; i++) {
    if (array1.includes(array2[i])) {
      result.push(array2[i]);
    }
  }
  return result;
}

const array1 = ["바나나", "키위", "포도"];
const array2 = ["바나나", "딸기", "포도", "딸기"];
const result3 = existArray(array1, array2);
console.log(result3);
