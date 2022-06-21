//함수내부에서 외로부터 주어진 인자의 값을 변경하는 것은 좋지 않다.
//상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함.
//원시값 - 값에 의한 복사(큰 문제 없음)
//객체값 - 참조에 의한 복사(메모리 주소)
function display(num) {
  num = 5; // X
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = "JJong"; // XXXXX 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 X
  console.log(obj);
}

const jongmin = { name: "jongmin" };
displayObj(jongmin);
console.log(jongmin);

function changeName(obj) {
  // 함수 이름부터 변경하는 느낌을 주도록
  return { ...obj, name: "bob" }; // 반활할때는 새로운 오브젝트 만들기
}

console.log(changeName(jongmin));
console.log(jongmin);
