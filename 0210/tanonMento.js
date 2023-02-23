/* 
let address;
console.log('address : ', address);

address = "선릉";
console.log('address : ', address);


function variables() {
  // 다음 코드는 수정하거나 지우지 마세요.
  const myAge = 21;
  // 아래에 코드를 작성해 주세요.
  let yourAge=29;
  // 다음 코드는 수정하거나 지우지 마세요.
  return myAge + yourAge;
}

console.log(variables());


function a(a, b) {
  return a+b;
}

console.log(a(5,4));

function checkYear(){
  return 2023;
}

console.log(checkYear());


function getName(name){
  return name+"님";
}

console.log(getName(1));



console.log('파라미터가 없는 함수');
function noParameter(){
  return 10;
}

const result4 = noParameter();

console.log(result4);




console.log('=====파라미터를 받는 함수=====')

function getName(name) {
  return name + '님';
}

const result1 = getName('허인');
const result2 = getName('윤종규');
const result3 = getName('김기현');

console.log(result1)
console.log(result2)
console.log(result3)




console.log('=====return을 생략한 함수=====')
function noReturn(age) {
  
  const mix = age * 1000;
  // 계산해도 아무것도 반환하지 안함!
  
}

const result6 = noReturn(10);
console.log(result6);



// Assignment 

function addTen(num) {
// 코드를 작성해주세요
num+=10;
return num;
}

console.log(addTen(10));


let num = 1;
let newNum = ++num;
console.log(num);
console.log(newNum);


// Assignment - 다음 함수 안에 코드를 작성해 주세요.
function mathExpression() {
  // 다음 코드의 값이 22가 되도록 수정해주세요.
  let result = (5 + 6) * 10 * 2 / 10;
  
  // 다음 코드는 수정하지 마세요!
  return result;
}

console.log(mathExpression())


console.log(("2 더하기 2는 " + 2 + 2));
console.log(("2 더하기 2는 " + (2 + 2)));


function textConcatenation() {
  // 다음 코드를 수정 하여
  // 아래의 문장이 올바른 값이 될 수 있도록 해주세요.
  let text = "2 더하기 2는 " +( 2 + 2);
  
  // 다음 코드는 수정하지 마세요!
  return text;
}

console.log(textConcatenation());


function myFavoriteColor(color){
if(color==="navy"){
  return "good!";
}
else if(color==="yellow"){
  return "bad!";
} 
else {
  return "whatever!";
}
}

console.log(myFavoriteColor("navy"));
console.log(myFavoriteColor("yellow"));
console.log(myFavoriteColor(1));


function canIDrinkSoju(age) {
  if(age<20){
    return "애야 가서 공부나 해라!";
  }
  else if(age>50){
    return "건강을 위해서 술은 적당히 마시세요!";
  }
  else{
    return "소주에는 곱창 어떠신가요?";
  }
}

let answer=prompt("나이를 입력하세요");

document.write(canIDrinkSoju(answer))

function rockPaperScissors(player1, player2) {
  //  예시:|| (player1 === "보" && player2 === "주먹")
    if ( (player1 === "가위" && player2 === "보" ) || (player1 === "보" && player2 === "바위") || (player1 === "바위" && player2 === "가위")) {
      result = " player1";
    }else if ( (player2 === "가위" && player1 === "보" ) || (player2 === "보" && player1 === "바위") || (player2 === "바위" && player1 === "가위")) {
      result = " player2";
    } 
    else{
      result = " 없습니다";
    }
    return result;
  }
  let player1 = prompt("player1 무엇을 내시겠습니까");
  let player2 = prompt("player2 무엇을 내시겠습니까");
  document.write("이긴 사람은");
  document.write(rockPaperScissors(player1,player2));

  function alertSuccess(name) {
    alert(name + "님 로그인 성공!");
  }
  

  let answer=prompt("이름을 입력해주세요.");

  alertSuccess(answer);

function isBiggerThanHundred(num){
  let myNumver=num;

  if (myNumver>100){
    return "크다!"
  }else if (myNumver<100){
    return "작다!"
  } else {
  return "같다!"
  }
}

console.log(isBiggerThanHundred(99))

function halfNum(value){
  return value/2;
}

console.log(halfNum(4));

function halfAddNum(value){
  let result = halfNum(value);
  return ++result;
}


console.log(halfAddNum(4));

function meetAt(year, month, date){
  
  if(date==undefined && month!=undefined){
    alert(`${year}년 ${month}월`);
  }
  else if(month==undefined){
    alert(`${year}년`);
  }
  else {
    alert(`${year}/${month}/${date}`);
}
}

meetAt(2023)

// 타논쌤코드
function meetAt(year, month, date) {
if(year,month,date){
  console.log(`${year}/${month}/${date}`)
}else if(year,month){
  console.log(`${year}년 ${month}월`);
}else 
  console.log(`${year}년`)
}


meetAt(2022); // 결과 --> "2022년"
meetAt(2032, 3); // 결과 --> "2032년 3월"
meetAt(1987, 10, 28); // 결과 --> "1987/10/28"



function consoleSuccess(month, name) {
  console.log(month, name);
}

let result = consoleSuccess("3", "김개발"); // 함수를 호출한 결과를 result에 담아서
console.log("consoleSuccess 호출 값은" + result); // 어떤 값이 리턴 되는지 직접 확인해보세요



function getTax(price) {
  return price * 0.1;
}
	 
function calculateTotal(price) {
  return price + getTax(price);
} 


//assignment
function getTotal(price1, price2) {
  return calculateTotal(price1)+calculateTotal(price2);
}

console.log(getTotal(1000,1000))


function getElement(){
  let arr = [3, [4, ["array", 9], 2+3], [0]];
  return arr[1][1][0];
}
console.log(getElement());



function addFirstToLast(myArray) {
  console.log( myArray[0]+myArray.at(-1)); //array.at(-1))==array[array.length-1]
  if(myArray===[0]){
    return 0;
  }
  else{
  return myArray[0]+myArray[myArray.length-1];
  }
}

console.log(addFirstToLast([1,2,3,4]));


*/