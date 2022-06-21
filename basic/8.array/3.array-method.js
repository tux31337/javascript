//배열의 함수들
//배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ["바나나", "사과", "레몬"];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

//특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf("사과"));

//배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes("사과"));

//추가 - 제일 뒤
let length = fruits.push("복숭아"); // 기존 배열 자체 수정(업데이트)
console.log(fruits);
console.log(length);

//추가 - 제일 앞
length = fruits.unshift("딸기"); // 기존 배열 자체 수정(업데이트)
console.log(fruits);
console.log(length);

//제거 - 제일 뒤
let lastItem = fruits.pop(); // 기존 배열 자체 수정(업데이트)
console.log(fruits);
console.log(lastItem);

//제거 - 제일 앞
let firstItem = fruits.shift(); // 기존 배열 자체 수정(업데이트)
console.log(fruits);
console.log(firstItem);

//중간에 추가 또는 삭제
//시작, 개수
const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(deleted);

fruits.splice(1, 1, "사과", "딸기");
console.log(fruits);

console.log("================");
//기존의 배열을 유지한채 잘라진 새로운 배열을 만듬
//시작 index포함 끝나는 index제외
let newArr = fruits.slice(0, 2);
console.log(fruits);
console.log(newArr);

//뒤에서부터 슬라이스해서 새로마듬
newArr = fruits.slice(-1);
console.log(newArr);

//여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

//순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();
//중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3));

// 특정한 값으로 배열을 채우기 - 배열 자체를 수정
arr = arr.flat(3);
arr.fill(0);
console.log(arr);

arr.fill("s", 1, 3);
console.log(arr);

arr.fill("a", 1);
console.log(arr);

//배열을 문자열로 합하기
let text = arr.join();
console.log(text);

text = arr.join("|");
console.log(text);
