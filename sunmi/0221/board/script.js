//화면 상단 애니메이션
$(function(){
    $(".moving")
    .css({"background" : "#fbcaca"})
    .animate({marginLeft: "92vw"}, 7000)
    .animate({marginLeft: 0}, 7000);
})





//게시판 상단, 검색버튼, 글쓰기버튼 배경색
$(function(){
    $(".btn a")
    .css({"background-color" : "#acc7fb"});
    $("#searchBtn")
    .css({"background-color" : "#acc7fb"});
    $(".top")
    .css({"background-color" : "#acc7fb"});
})





//게시판 글 제목 부분 배경색 이벤트
$(function(){
    $("#title1").hover(function() {
        $("#title1").css({"background-color":"#c674e1"});
        },
            function() {
            $("#title1").css({"background":"none"});
    });
});

$(function(){
    $("#title2").hover(function() {
        $("#title2").css({"background-color":"#d696ec"});
        },
            function() {
            $("#title2").css({"background":"none"});
    });
});

$(function(){
    $("#title3").hover(function() {
        $("#title3").css({"background-color":"#e6c2f1"});
        },
            function() {
            $("#title3").css({"background":"none"});
    });
});

$(function(){
    $("#title4").hover(function() {
        $("#title4").css({"background-color":"#f7ebfa"});
        },
            function() {
            $("#title4").css({"background":"none"});
    });
});





//게시판 글 제목 클릭 시 창
$(function(){
    $(".title").click(function(){
        var result = prompt("4조 2023년 02월 21일 암구호");
            if(result === "SQLD"){
                window.open("https://corp.alpaco.co.kr/");
            }else if(result === ""){
                alert("입력값이 없습니다.")
            }else{
                alert("소속 조를 확인하세요~!");
            }
    });
});







//게시판 하단 숫자 목록 5,6,7,8 넘기기 이벤트
$(function(){
    $(".add").click(function(){
        $(".hide").hide()
        $(".invisible")
        .css({"display" : "block"});
    })
})


//게시판 하단 숫자목록 색 이벤트
$(function(){
    $(".number a").on("mouseover", function(e){
    e.preventDefault();

    $(".number a")
    .css({"background-color" : "#fbcaca"});

    $(this)
    .css({"background-color" : "#acc7fb"});
    });
});








//input 검색창 배경색 이벤트
$(function(){
    $(".search").on({
        "click" : function(){
            $(".search")
            .css({"background-color": "pink"});
        },
    })
    $(".search").on({
        "blur" : function(){
            $(".search")
            .css({"background-color" : "#95d99f"});
        }
    });
});



//글쓰기 버튼 클릭 ALERT창
$(function(){
    $(".write").click(function(){
        alert("4조원만 작성 가능합니다!")
    });
});


//글쓰기 버튼 호버 트랜스폼 확대하려했는데 안 되네요;;;
$(function (){
    $(".btn").hover(function(){
        $(".btn").css({"transform" :"scale(1.05)"});
    },
    function(){
        $(".btn").css({"transform" :"scale(1)"});
    })

});