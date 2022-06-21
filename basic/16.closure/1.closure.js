// 클로저 : 함수와 그 외부를 둘러싸고있는 lexiocal 환경의 조합
// 클로저는 내부함수에서 외부함수의 상태에 접근하는 것을 말한다.

function outer() {
  const x = 0;
  function inner() {
    x;
  }
  inner();
}
outer();
