//웹 사이트가 시작되면 시계가 작동
var watch = setInterval(myWatch, 1000);

//myWatch() 작성
function myWatch(){
    var date = new Date();  //날짜와 시간 객체 생성
    var now = date.toLocaleString();  //한글로 표기
    document.getElementById("demo").innerHTML = now;
}