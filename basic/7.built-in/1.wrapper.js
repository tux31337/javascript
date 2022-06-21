//래퍼객체
//원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; // numner원시타입

//number 원시타입을 감싸고있는 Number객체로 감싸짐.
console.log(number.toString());
console.log(number);

const text = "text"; // string 원시타입
console.log(text);
text.length; // String 객체
text.trim(); // String 객체
