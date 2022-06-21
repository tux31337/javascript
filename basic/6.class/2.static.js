// static 정적 프로퍼티, 메서드
// static을 붙이면 클래스레벨이라 클래스명으로 호출가능
// 안붙으면 instance레벨의 프로퍼티 메서드는 인스턴스를 만들어서 호출해야함
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음. 아무것도 채워지지 않은 템플릿 상태라서
    return new Fruit("banana", "바나나");
  }

  //인서턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
  display2() {}
}

console.log(Fruit.name);
//Fruit.display();

const banana = Fruit.makeRandomFruit();
console.log(banana);

const apple = new Fruit("apple", "사과");
console.log(apple.MAX_FRUITS);
console.log(Fruit.MAX_FRUITS);
