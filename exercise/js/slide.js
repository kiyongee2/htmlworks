var slides = document.querySelectorAll("#slides > img")
var current = 0
var prev = document.getElementById("prev")
var next = document.getElementById("next");

showSlides(current);  //첫번째 이미지 보임
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(num){
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[num].style.display = "block";
}

function nextSlide(){
  if(current < slides.length - 1)
    current += 1;
  else   //current == slides.length - 1
    current = 0;
  showSlides(current);
}

function prevSlide(){
  if(current > 0)
    current -= 1;
  else
    current = slides.length - 1;
  showSlides(current)
}

