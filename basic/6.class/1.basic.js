//객체를 손쉽게 만들수 있는 템플릿
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

//클래스 class

class Fruit1 {
  //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //function 키워드를 사용하면 오류가 발생한다.
  //display () {} 이렇게 하거나 arrow function
  display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

//apple1은 Fruit1의 클래스의 인스턴스이다
const apple1 = new Fruit1("apple", "사과");
//orange1은 Fruit1의 클래스의 인스턴스이다
const orange1 = new Fruit1("orange", "오렌지");

apple1.display();
console.log(apple1.name);
orange1.display();
console.log(orange1.name);

//obj는 객체이고 , 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: "ellie" };
