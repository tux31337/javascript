function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = add(1, 2);
console.log(result);

//사용 예제 2

function fullName(firstName, lastName) {
  return `${lastName}${firstName}`;
}

let lastName = "김";
let firstName = "지수";

console.log(fullName(firstName, lastName));
