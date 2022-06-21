const fruits = ["바나나", "사과", "포도", "복숭아"];

//배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//const fruits = ["바나나", "사과", "포도", "복숭아"];
//추가, 삭제 - 좋지 않은 방식
//인덱스로 접근하는 경우는 실수가 발생할 수 있음.
fruits[4] = "딸기";
console.log(fruits);

delete fruits[1];
console.log(fruits);
