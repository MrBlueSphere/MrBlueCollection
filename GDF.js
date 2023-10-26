
/* ----------------------- Preliminary ----------------------- */

/* ----------------------- Header Stuff ----------------------- */

/* ----------------------- Body Stuff ----------------------- */

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const getDownFlooring = document.querySelector('#GetDownFlooring');
    const logo = this.document.querySelector('.logo');

    if (window.scrollY > 200) {
        getDownFlooring.style.fontSize = '25px';
        logo.style.height = '1.8rem';


        //if scroll opposite, reset:
    } else {
        getDownFlooring.style.fontSize = '42px';
        getDownFlooring.textContent = 'Get Down Flooring, Inc.';
        logo.style.height = '4rem';
    }
});

// ------------------------- Gallery Stuff -------------------------


//  functions declared
let slideIndex = 1;
  showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  