var slideIndex = 1;
var time;
var header = document.getElementsByTagName("HEADER")[0];
var sendvich = document.getElementsByClassName("sendich-menu")[0];
var menuIcon = document.getElementsByClassName("menu-icon")[0];
var screenWiidth = window.screen.width;
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(time);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(time);
    showSlides(slideIndex = n);

}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");;
    if (n === undefined) {
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";   
        }
        slideIndex++;
    }
    if (slideIndex > slides.length) {slideIndex = 1};
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    };
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
    time = setTimeout(showSlides, 4000); 
}

function sendvichButton() {
    if( screenWiidth < 620 && sendvich.style.display === "none") {
        menuIcon.classList.add("change");
        sendvich.style.display = "flex";
        header.style.marginBottom = "65px";
    } else {
        menuIcon.classList.remove("change");
        sendvich.style.display = "none";
        header.style.marginBottom = "15px";  
    }
}
