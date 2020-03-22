function RecipieNamesEqual(x, y) {
    x = x.toLowerCase();
    y = y.toLowerCase();
    x = x.replace(/\s/g, '');
    y = y.replace(/\s/g, '');
    return x.includes(y) || y.includes(x) || x == "" || y == "";
}

function SearchRecipie() {
    let recipies = document.getElementsByClassName("recipies");
    let Input = document.getElementById("Search-Box");
    for (recipie of recipies){
        if (RecipieNamesEqual(recipie.id, Input.value)) {
            recipie.style.display = "inline-block";
        }
        else {
            recipie.style.display = "none";
        }
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}