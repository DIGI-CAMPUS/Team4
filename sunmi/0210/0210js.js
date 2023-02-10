function checkCorrect() {
    let hello = "안녕하세요!";
    return hello;
}
console.log(checkCorrect());

function checkYear(){
    let currentYear = "2023"
    return currentYear;
}
console.log(checkYear());

function getName(name) {
    return name + "님!";
}
console.log(getName("선미"));


function addTen(number){
    return parseInt(number) + 10;
}

console.log(addTen(200));

console.log(3 + 6 * 2);

function mathExpression(){
    let result = (5 + 6) * 10 / 2 / 2.5;
    return result
}
console.log(mathExpression());

function textConcatenation (){
    let text = "2 더하기 2는" + 2 + 2;
    return text
}

function myFavoriteColor(color){
    if (color = "navy")
    return "Good!"
    else if (color = "yellow")
   return "Bad!";
    else return "Whatever!";
}

console.log(myFavoriteColor("red"))


function canIDrinkSoju(age) {
    if(age < 20)
    return "얘야 가서 공부나 해라!"
    else if( age>= 50)
    return "건강을 위해서 술은 적당히 마시세요!"
    else return "소주에 곱창 어떠신가요?"
}
console.log(canIDrinkSoju(35))


function rockPaperScissors (player1, player2) {
    if(player1 === "가위" && player2 === "보" || player1 === "가위" && player2 === "가위") 
    return "player1 win"

    else if (player1 === "바위" && player2 === "가위" || player1 === "바위" && player2 === "바위") 
    return "player1 win"

    else if (player1 === "보" && player2 === "바위" || player1 === "보" && player2 === "보") 
    return "player1 win"

    else return "player2 win"
}

console.log(rockPaperScissors("바위", "보"))

function isbiggerThanHundred(num){
    let myNumber = num;
    if(myNumber > 100)
    return "크다!";
    else if( myNumber <= 100)
    return "작다!"

}

console.log(isbiggerThanHundred(258));


function hafNum ( value ){
    let halfValue = value / 2
    return halfValue
}

console.log( hafNum (8))

function halfAddNum (value) {
    let result = value / 2
    return result + 1
}

console.log(halfAddNum(12))

function alertSuccess( month, name) {
    return month + "월의 당첨자는 " + name + "입니다!";
}

console.log(alertSuccess(3, "박선미"));

function meetAt (year, month, date){
   if (year, month, date)
    {return `${year} / ${month} / ${date}`}
    
    else if (year, month)
    {return  `${year}년 ${month}월`}

   else return `${year}년`;
}

console.log(meetAt(2023, 2, 28));
console.log(meetAt(2023, 2));
console.log(meetAt(2023));

function multiplyTen(myNumber) {
    return 10 * myNumber;
}

console.log(multiplyTen(30));


function consoleSuccess (month, name) {
    console.log(month,name);
}

let result = consoleSuccess("3", "박선미");
console.log("consoleSuccess 호출 값은" + result)


function getTax(price){
    return price * 0.1;
}

function calculateTotal(price){
    return price + getTax(price);
}

const abs = calculateTotal(3500);
console.log(abs);

function getTotal (price1, price2){
    return calculateTotal(price1) + calculateTotal(price2)
}

console.log(getTotal(349820, 1286548000));

