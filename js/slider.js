var i =1;
var slideIndex = 1;
showSlides(slideIndex);

var btnPrev = document.querySelector(".slider__prev");
var btnNext = document.querySelector (".slider__next");

btnPrev.addEventListener("click", function(event) {
  event.preventDefault();
  plusSlides(-1);
});

btnNext.addEventListener("click", function(event) {
  event.preventDefault();
  plusSlides(1);
});

function plusSlides(n) {
	showSlides(slideIndex += n);
}


var dots = document.querySelectorAll(".slider__dot");

dots.forEach (function(element,i) {
  element.addEventListener("click", function() {
    console.log(dots.indexOf(element));
  })
});


function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.querySelectorAll(".slider__item");
	var dots = document.querySelectorAll(".slider__dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length};

  for (i = 0; i < slides.length; i++) {
  	slides[i].style.display = "none";
  }

  for (i=0; i < dots.length; i++) {
  	dots[i].className = dots[i].className.replace (" dot--active", "");
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " dot--active";
}
