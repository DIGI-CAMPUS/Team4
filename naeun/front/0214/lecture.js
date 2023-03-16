/* const person ={}; //빈객체 생성
console.log(person);
person.name="kb"; //프로퍼티 name, 알규먼트 "kb" 부여
console.log(person);  


//
const person ={}; //빈객체 생성
console.log(person);
person.name={firstName:"kb", lastName :"lee"};
person.likes=["apple","banana"];
console.log(person); 


//
const person ={ name:"kb"}; 
console.log(person); 
delete person["name"]; //name프로퍼티 삭제 
//=delete person.name; //name프로퍼티 삭제 
console.log(person);
//



//
let num=10;
let copyNum=num;
console.log(num);
console.log(copyNum); 
//

//
const num=10;
let copyNum=num;
num=20; //변수 num 값 재할당, const 오류
console.log(num);
console.log(copyNum); 

//
const person ={
  name:"kb"
}
console.log(person);
person.name="kbb" //person.name 으로 속성에 접근. const 객체여도 속성값은 재할당 가능.
console.log(person); 

//
const person ={
  name:"kb"
}
console.log(person);

person ={
  name:"kbb"
} //다시 프로퍼티 설정하는 것은 불가능.
console.log(person);

const person ={
  name:"kb"
}
console.log(person);

person.name ={
name:"kbb"
} //이건 가능
console.log(person);


//
const person ={
  name:"kb"
};
console.log(person);

const copyPerson=person; //얕은 복사. 
console.log(copyPerson);

person.name="kbb" 
console.log(person); 

console.log(person.name);
console.log(copyPerson.name);
*/

const student={
  name:"kim",
  age :"20"
};
student.gender="female";
delete student.age;
console.log(student);