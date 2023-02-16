const profileImage = document.querySelector("img");

profileImage.addEventListener("click", () => {
  const confirmation = confirm("여기가 어딘지 궁금하다면?");

  if (confirmation) {
    alert("왕십리 훅클라이밍입니다!");
  }
});

function login() {
  var emailOrID = document.querySelector('input[type="text"]').value;
  var password = document.querySelector('input[type="password"]').value;
  if (emailOrID === "DIGI4" && password === "DIGI4") {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".welcome").style.display = "block";
  } else {
    alert("아이디와 비밀번호를 확인하여 주십시오(DIGI4).");
  }
}
