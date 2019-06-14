function dropFunction() {
    document.getElementById("navDrop").classList.toggle("show");
}

        window.onclick = function(event) {
            if (!event.target.matches('.target')) {
                var dropdowns = document.getElementsByClassName("nav__dropdown--content");
                var i;
                 for (i = 0; i < dropdowns.length; i++) {
                 var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
            }
    }
    }
}

// toggle

top.visible_id = 'after'; 
toggleblur()

function toggleblur() { 

    var before = document.getElementById('before'); 
    var after = document.getElementById('after'); 
   if (top.visible_id == 'before') {
     before.style.display = 'none'; 
     after.style.display = 'block'; 
     top.visible_id = 'after';
   } else {
     before.style.display = 'block'; 
     after.style.display = 'none'; 
     top.visible_id = 'before';
   }
   var time = setTimeout("toggleblur()",3000);
 } 


//  slideshow

function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }