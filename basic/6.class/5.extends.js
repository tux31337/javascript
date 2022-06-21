class Tiger {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("먹자!");
  }

  sleep() {
    console.log("잔다!");
  }
}

class Dog {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("먹자!");
  }

  sleep() {
    console.log("잔다!");
  }

  play() {
    console.log("놀자아~!");
  }
}

class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("먹자!");
  }
}

class Bear extends Animal {}
const bear = new Bear("노란색");
console.log(bear);

class Cat extends Animal {
  //자식클래스에서  constructor를 정의하는 순간 부모꺼도 받아와야함
  constructor(color, ownerName) {
    super(color); // super : 내가 상속하고 있는 부모를 가리킴
    this.ownerName = ownerName;
  }
  play() {
    console.log("집사야 놀자!");
  }

  // 오버라이딩
  eat() {
    super.eat(); // 부모꺼도 별도 호출 가능
    console.log("고양이가 먹는다!");
  }
}
const cat = new Cat("흰색", "이종민");
console.log(cat);
cat.play();
cat.eat();
