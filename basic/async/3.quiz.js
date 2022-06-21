//주어진 seconds (초)가 지나면 callback 함수를 호출
//단, seconds 가 0 보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("콜백함수를 전달해야한다");
  }
  if (seconds < 0 || !seconds) {
    throw new Error("0 이하의 값을 입력할 수 없다");
  }

  setTimeout(() => {
    callback();
  }, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log("hi");
  }, -1);
} catch (error) {
  console.log(error);
}
