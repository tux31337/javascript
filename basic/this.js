/**
 * 클로벌 컨텍스의 this
 * - 브라우저 :
 * - 노드
 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis); // module
//globalThis.setTimeout // global 객체
//setTimeout

console.clear();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */

function func() {
  console.log(this);
}
func();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log("hihi" + this.name);
  };
}

const cat1 = new Cat("냐용");
const cat2 = new Cat("미야옹");
cat1.printName();
cat2.printName();

const dog1 = new Dog("개개");
dog1.printName = cat1.printName;
console.log("==================");
dog1.printName();
cat1.printName();
