//웹 사이트가 시작되면 시계가 작동
var watch = setInterval(myWatch, 1000);

//myWatch() 작성
function myWatch(){
    var date = new Date();  //날짜와 시간 객체 생성
    var now = date.toLocaleString();  //한글로 표기
    document.getElementById("demo").innerHTML = now;
}

//스크롤 이동시 상단 메뉴 고정하기
var topMenu, topMenuPosition;
topMenu = document.getElementById("navbar");
topMenuPosition = topMenu.offsetTop;  //메뉴바의 top 위치를 저장

//스크롤 이벤트 만들기
document.addEventListener("scroll", function(){ 
    if(window.pageYOffset >= topMenuPosition){
        topMenu.classList.add("sticky");   //sticky 클래스 선택자 삽입
    }
    else{
        topMenu.classList.remove("sticky"); //sticky 클래스 선택자 제거
    }
});
