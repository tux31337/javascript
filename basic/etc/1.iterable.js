//Iterable 하다는건! 순회가 가능하다는 것 이다.
//[Symbol.iterator](): Iterator;
//심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
//순회 가능한 객체이다 라는걸 알 수 있다.
//순회가 가능하면 무엇을 할 수 있나?.. for..of, spread

const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 };
// for (const item of obj) {
//   console.log(item);
// }

for (const item in obj) {
  // key를 출력
  console.log(item);
}

for (const item of array.values()) {
  console.log(item);
}

for (const item of array.keys()) {
  console.log(item);
}

for (const item of array.entries()) {
  console.log(item);
}

const iterator = array.values();
for (const item of iterator) {
  console.log(item);
}

console.log(iterator.next().done);
