/*
const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name} : 사과`);
  },
};

const orange = {
  name: "orange",
  display: function () {
    console.log(`${this.name} : 오렌지`);
  },
};

console.log(apple);
console.log(orange);
*/

//생성자 함수

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
  //return this;  생성자함수는 this 자동 리턴 생략 가능
}

const apple = new Fruit("apple", "사과");
const orange = new Fruit("orange", "오렌지");

apple.display();
console.log(apple.name);
orange.display();
console.log(orange.name);
