var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.querySelectorAll(".slider__item");
	var dots = document.querySelectorAll(".dot");
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
