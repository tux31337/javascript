function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("바나나");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("사과");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

//바나나와 사과를 같이 가지고오기
getBanana().then((banana) =>
  getApple()
    .then((apple) => {
      return [banana, apple];
    })
    .then(console.log)
);

//Promise.all 병령적으로 한번에 모든 Promise 들을 실행!
Promise.all([getBanana(), getApple(), , getOrange()])
  .then((fruits) => console.log("all", fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), , getOrange()])
  .then((fruits) => console.log("all", fruits))
  .catch(console.log);

//Promise.race 주어진 Promise 중에 제일 빨리 수행된것이 인긴다.
Promise.race([getBanana(), getApple()]).then((fruit) => console.log("rece", fruit));
