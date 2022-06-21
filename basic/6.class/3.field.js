//접근제어자 - 캡슐화
//private(#), public(기본), protected

class Fruit {
  #name;
  #emoji;
  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name} : ${this.#emoji}`);
  };
}

const apple = new Fruit("apple", "사과");
console.log(apple); //#field는 외부에저 접근이 불가능하다. 보이지도 않는다.
