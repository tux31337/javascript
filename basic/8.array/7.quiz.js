// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
let input = ["🍌", "🍓", "🍇", "🍓"];

function replace(array, findItem, changeItem) {
  const result = Array.from(array);
  array.forEach((item, i) => {
    if (item === findItem) {
      result[i] = changeItem;
    }
  });
  return result;
}

function replace2(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}

console.log(replace(input, "🍓", "🥝"));
console.log(replace2(input, "🍓", "🥝"));

// 퀴즈2:배열과 특정한 요소를 전달받아
//배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2<br><br>
input = ["🍌", "🥝", "🍇", "🥝"];
function counting(array, element) {
  let cnt = 0;
  array.forEach((item) => {
    if (item === element) {
      cnt++;
    }
  });
  return cnt;
}

function counting2(array, element) {
  return array.reduce((count, value) => (value === element ? count + 1 : count), 0);
}

function counting3(array, element) {
  return array.filter((value) => value === element).length;
}
console.log(counting(input, "🥝"));
console.log(counting2(input, "🥝"));
console.log(counting3(input, "🥝"));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ;['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
input = ["🍌", "🥝", "🍇"];
let input2 = ["🍌", "🍓", "🍇", "🍓"];
function newArr(array1, array2) {
  return array1.filter((item) => array2.some((array2Item) => array2Item === item));
}

function newArr2(array1, array2) {
  return array1.filter((item) => array2.includes(item));
}

console.log(newArr(input, input2));
console.log(newArr2(input, input2));

//퀴즈 4
//5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

function getAvg(array, standard) {
  const arr = array.filter((item) => item >= standard);
  return arr.reduce((sum, value) => (sum += value), 0) / arr.length;
}

function getAvg2(array, standard) {
  return array.filter((num) => num >= standard).reduce((avg, num, _, array) => avg + num / array.length, 0);
}

console.log(getAvg(nums, 25));
console.log(getAvg2(nums, 25));
