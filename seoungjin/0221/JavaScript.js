//접속시 팝업창 열기
window.open(
  "popup.html",
  "GoodWord",
  "width=1200px,height=350px,left=150px,top=200px"
);
//스크롤 버튼 :  연습용으로 만든거니 나중에 지우자
function sTo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function sBy() {
  window.scrollBy({ top: 500, behavior: "smooth" });
}

//로그인창 띄우기
function openLogInWindow() {
  window.open(
    "loginPage.html",
    "loginwidow",
    "width=700px,height=400px,left=400px,top=150px"
  );
}
//회원가입창 띄우기
function openjoinWindow() {
  window.open(
    "join.html",
    "joinwidow",
    "width=600px,height=1000px,left=400px,top=150px"
  );
}
//스터디 하위메뉴 default 값 none -> 클릭시 block 되는 함수
function doDisplaystudySubMenu() {
  var haha = document.getElementById("studySubMenu");
  if (haha.style.display == "none") {
    haha.style.display = "block";
  } else {
    haha.style.display = "none";
  }
}
//갤러리박스 이미지 변경
function changeImg(animal) {
  let value = "";
  if (animal === "dog") {
    value = "999.images/chi.jpg";
  } else if (animal === "cat") {
    value = "999.images/cat.jpg";
  } else if (animal === "tiger") {
    value = "999.images/tiger.png";
  } else if (animal === "lion") {
    value = "999.images/lion.jpg";
  }
  document.getElementById("galleryImg").src = value;
  console.log(animal); //확인용 콘솔 창
  console.log((document.getElementById("galleryImg").src = value)); //확인용 콘솔 창
}

//제이쿼리 : 현재 커서 마우스 위치 표시하기
$(function () {
  $(document).on("mousemove", function (e) {
    $(".posX").text(e.pageX);
    $(".posY").text(e.pageY);
  });
});

//제이쿼리 : 팝업창 문구 숨기기,내보내기
$(function () {
  //요소 선택.효과메서드(효과 소요시간, 가속도, 콜백함수-끝난 후 실행할 함수(생략가능))
  $(".btn1").hide();
  $(".popbox").hide();

  $(".btn1").on("click", function () {
    $(".popbox").slideUp(1000, "linear", function () {
      $(".btn1").hide();
      $(".btn2").show();
    });
  });
  //클릭하면 box가 숨겨지고, 콜백 함수 실행되어서 fade in버튼 생성
  $(".btn2").on("click", function () {
    $(".popbox").fadeIn(1000, "swing", function () {
      $(".btn2").hide();
      $(".btn1").show();
    });
  });
});
