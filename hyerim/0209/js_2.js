let x = Math.floor(Math.random() * 100);
alert("0~99 사이의 숫자 x가 생성되었습니다.");
let count = 1;
let big = 99;
let small = 0;
while (true) {
  alert(count + "번째 시도");
  let guess = parseInt(prompt(small + "~" + big + "까지의 숫자를 입력하세요"));
  if (guess < x) {
    alert("x는 더 큰 수 입니다.");
    small = guess + 1;
  } else if (guess > x) {
    alert("x는 더 작은 수 입니다.");
    big = guess - 1;
  } else if (guess === x) {
    alert("정답입니다!" + count + "회 만에 맞췄습니다.");
    break;
  } else {
    alert("숫자를 입력하세요.");
  }
  count++;
}
