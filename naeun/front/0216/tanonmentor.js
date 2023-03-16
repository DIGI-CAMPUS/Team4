/* let info = "JavaScript는 프로래밍 언어이다.";
let firstChar = info.indexOf("프로래밍");

console.log(info, firstChar);

if(firstChar !== -1) {
  info = info.slice(0, firstChar) + "프로그래밍" + info.slice(firstChar+4, info.length);
}

console.log(info);

let address = prompt("주소를 입력하세요. 띄어쓰기, 시도구 명시는 필수입니다.")

function sliceCity(address) {
  let citiIndex= address.indexOf("시");
  let gapIndex=address.indexOf(" ");
  let editAddress
  if(citiIndex<gapIndex){
    editAddress= address.slice(citiIndex+1,address.length);
  }else{
    editAddress= address.slice(0,gapIndex+1) + address.slice(citiIndex+1,address.length);
  }
  return editAddress;
}

document.write(sliceCity(address));
let a = '900';
let b = 350;
let c = Math.random();
let d = '5' + 5;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof a);
------------------------------------
console.log('200'+'10');
console.log('0.20'-'0.10'); //이게 되네
console.log(200+'11');
console.log('200'+11);
console.log('200'-'안녕');
------------------------------------

console.log(parseFloat(parseInt("1.901")));
console.log(typeof parseFloat("1.901"));
console.log(typeof Number("1.901"));
console.log(typeof (parseInt("200") + 1));

var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();

console.log(numberAsNumber, typeof numberAsNumber);
console.log(numberAsString, typeof numberAsString);
var numberAsNumber = 1234;
var numberAsString = 1234 + "";

console.log(numberAsNumber, typeof numberAsNumber);
console.log(numberAsString, typeof numberAsString);
------------------------------------
var numberAsNumber = 1234;

console.log(numberAsNumber, typeof toString(numberAsNumber));

var numberAsString = numberAsNumber.toString();
------------------------------------------
let age_string=prompt(" 나이를 입력하세요", "만나이 기준입니다.");

function pensionRemain(age_string) {
  return 65-age_string;
}

document.write(`앞으로 ${pensionRemain(age_string)}년 남으셨습니다`);
var rightNow = new Date();
console.log(rightNow.getFullYear());
console.log(rightNow.getMonth());
console.log(rightNow.getDate()); 
console.log(rightNow.getDay()); //요일. 1==월요일 7==일요일
console.log(rightNow.getHours());
console.log(rightNow.getMinutes());

console.log(rightNow.getTime()); 
----------------------------------------------


let date1 = new Date('December 17, 2019 03:24:00');
let date2 = new Date('2019-12-17T03:24:00');
let date3 = new Date(2019, 5, 1);

console.log(date1);
console.log(date2);
console.log(date3);


var rightNow = new Date();
----------------------------------------------
 */
let rightNow = new Date();
let birthday=prompt("생일을 입력하세요","숫자로만 입력. 예시 : 19981223")
birthday=new Date(Number( birthday));
document.write(birthday);
// console.log(rightNow.getFullYear());

function changeAge(birthday) {
  
}