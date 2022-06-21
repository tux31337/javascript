//주어진 seconds (초)가 지나면 callback 함수를 호출
//단, seconds 가 0 보다 작으면 에러를 던지자!
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0 보다 작음"));
    }
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

//runInDelay(2).then(필요한일을 수행).catch(에러를 처리).finally(최종적으로)

runInDelay(2)
  .then(() => {
    console.log("타이머 완료!");
  })
  .catch(console.error)
  .finally(() => console.log("끝났다"));

// try {
//   runInDelay(() => {
//     console.log("hi");
//   }, -1);
// } catch (error) {
//   console.log(error);
// }
