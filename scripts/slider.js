
var slideIndex = 1; 
showSlides(slideIndex); 

function showSlides(n) {
    var slides = document.getElementsByClassName("hero-image");
    var dashes = document.getElementsByClassName("dash");
    
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
  
    for (var i = 0; i < dashes.length; i++) {
        dashes[i].className = dashes[i].className.replace(" active", "");
    }
    
  
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    } else {
        slideIndex = n;
    }
    
    slides[slideIndex - 1].style.display = "block";
    dashes[slideIndex - 1].className += " active";
}


function dashClick(n) {
    if (n === slideIndex) {
        return; 
    }
    showSlides(n);
}



function setnewimage() {
    document.getElementById("gallery2-photo").src = "./images/heroImage1.jpg";
}
function setnewimage2() {
 document.getElementById("gallery2-photo").src = "./images/heroImage2.jpg";
}
function setnewimage3() {
  document.getElementById("gallery2-photo").src = "./images/heroImage3.jpg";
}

