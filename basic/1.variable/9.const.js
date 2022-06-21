//let 재할당이 가능
//변수 : 값을 저장하는 공간
//     : 자료를 저장할 수 있는 이름이 주어진 기억장소
let a = 1;
a = 2;

//const 재할당이 불가능
//1. 상수
//2. 상수변수 또는 변수
const text = "hello";
// text = "hi"; 이렇게 하면 안된다.

//1. 상수
const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "apple",
  color: "red",
  display: "사과",
};

//apple = {};

//        재항당        변경
//let     YES           YES
//const   NO            YES
