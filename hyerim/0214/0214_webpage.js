const profileImage = document.querySelector("img");

profileImage.addEventListener("click", () => {
  const confirmation = confirm("여기가 어딘지 궁금하다면?");

  if (confirmation) {
    alert("왕십리 훅클라이밍입니다!");
  }
});
