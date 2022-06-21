//정직원과 파트타임직원을 나태날 수 있는 클래스를 만들어 보자
//직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
//정직원 시간당 10000원
//파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, time) {
    this.name = name;
    this.department = department;
    this.time = time;
  }
}

class FullTimeEmployee extends Employee {
  salary() {
    return 10000 * this.time;
  }
}

class PartTimeEmployee extends Employee {
  salary() {
    return 8000 * this.time;
  }
}

const jongmin = new FullTimeEmployee("이종민", "개발", 100);
console.log(jongmin);
console.log(jongmin.salary());
