const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y };  츅약 표현
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

const obj = makeObj("이종민", 28);
console.log(obj);
