//매개변수의 기본값은 무조건 undefined
function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}

add(1, 2, 3);
