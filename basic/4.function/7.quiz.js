//주어진 숫자 만큼 0부터 순회하는 함수
//순회하면서 주어진 특정한 일을 수행해야 함
//순회하는 숫자를 다 출력하고 싶음
//순회하는 숫자의 두배값을 다 출력하고 싶음

const printAll = (num) => {
  console.log(num);
};

const printDouble = (num) => {
  console.log(num * 2);
};

const iterate = (max, action) => {
  for (let i = 0; i < max; i++) {
    action(i);
  }
};

iterate(5, printAll);
iterate(5, printDouble);

setTimeout(() => {
  console.log("1초뒤 이함수가 실행될거에요");
}, 1000);
