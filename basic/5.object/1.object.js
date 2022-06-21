//객체를 만드는방법
// Object literal {key : value}
//new Object()
//Object.create();

//key - 문자 , 숫자, 문자열, 심볼, 대괄호도 가능
//value - 원시값, 객체(함수도 가능)
let apple = {
  name: "apple",
  "hello-bye": "안녕",
  0: 1,
  ["hello-bye1"]: "안녕",
};

//속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple["hello-bye"]); // 대괄호 표기법 bracket notation
apple["name"];

//속성 추가
apple.emoji = "나는 사과";
console.log(apple.emoji);
console.log(apple);

//속성 삭제
delete apple.emoji;
console.log(apple);
