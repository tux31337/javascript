//자바스크립트 함수는 만능 슈퍼맨
//함수처럼 사용, 생성자 함수로 사용(클래스)
//하지만, 이걸 위해 불필요한 무거운 프로토타입이 생성됨.

const dog = {
  name: "Dog",
  play: () => {
    console.log("논다멍");
  },
};

const cat = {
  name: "cat",
  paly() {
    console.log("내용");
  },
};

// cat.paly();
// new cat.paly();

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 x)
 * 3. 함수 자체 arguments 를 가지지 않음.
 * 4. this 에 대한 바인딩이 정적으로 결정됨.
 *  - 함수에서 제일 근접한 사위 스코프의 this에 정적으로 바인딩됨.
 */

const printArrow = () => {
  console.log(this);
};
printArrow();
