// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(fisrtName, lastName) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
  }

  get fullName() {
    // 접근자 propert는 쓰면 함수지면 고정된값이 아니라 호출하는 시점에 데이터를 만들어서 return을 하는데 속성에 가깝기 때문에 속성의 한부분이라 생각하는걸 간주하기위해 get을 붙여 속성에 접근하는것처럼만들수있음
    return `${this.lastName} ${this.fisrtName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student("수지", "김");
console.log(student.fullName);
student.fullName = "이종민";
