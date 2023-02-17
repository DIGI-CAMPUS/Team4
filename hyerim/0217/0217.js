const ee = document.querySelector("#text"); //노드 선택, .css선택자
setInterval(function () {
  ee.classList.toggle("blue-color");
}, 1000);
function sTo() {
  window.scrollTo({ top: 600, behavior: "smooth" });
}
function sBy() {
  window.scrollBy({ top: 600, behavior: "smooth" });
}

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
    alert("로그인이 되었습니다! 맛있는 초코케이크를 드릴게요:D");
  } else {
    alert("아이디와 비밀번호를 확인하여 주십시오(DIGI4).");
  }
}
