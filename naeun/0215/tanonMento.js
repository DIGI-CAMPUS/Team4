/* 
let array=[];
let a;

for(a=0;a<5;a++){
  array[a] = parseInt(prompt(a+1 +"번째 숫자를 입력해주세요"));
}
document.write("{"+array +"}<br>");

document.write("smallest ="+findSmallest(array));


function findSmallest(arr){
  let smallest=arr[0];
  for(a=0;a<5;a++){
    if (smallest >= arr[a+1]) {
      smallest=arr[a+1];
    }
  }
  return smallest;
}

let cities = [1,1,1,1,1];
cities.push("경주", "전주");
console.log(cities);
cities.unshift("인천");
console.log(cities);
//

let array=[];
let a;

for(a=0;a<5;a++){
  array[a] = parseInt(prompt(a+1 +"번째 숫자를 입력해주세요"));
}
document.write("array ={"+array +"}<br>");

document.write("new array="+divideInHalf(array));


function divideInHalf(array){
  let result=[];
  for(a=4;a>=0;a--){
    if (array[a] <= 10) {
      result.unshift(array[a]);
    }else
    result.push(array[a]);
  }
  return result;
}


*/


