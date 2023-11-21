
/* ----------------------- Preliminary ----------------------- */

/* ----------------------- Header Stuff ----------------------- */

function copyemail() {
var copyText = document.getElementById("copyemail");

copyText.select()
copyText.setSelectionRange(0, 99999);

navigator.clipboard.writeText(copyText.value);

alert("Copied Email Address");


}

/* ----------------------- Body Stuff ----------------------- */

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const getDownFlooring = document.querySelector('.GetDownFlooring');
    const logo = document.querySelector('.logo');
    const emailbutton = document.querySelector('.email');
    const callbutton = document.querySelector('.call');    

    if (window.scrollY > 200) {
        getDownFlooring.style.fontSize = '25px';
        logo.style.height = '2rem';
        emailbutton.style.opacity = '1';
        callbutton.style.opacity = '1';



        //if scroll opposite, reset:
    } else {
        getDownFlooring.style.fontSize = '40px';
        logo.style.height = '4rem';
        emailbutton.style.opacity = '0';
        callbutton.style.opacity = '0';

    }
});


// ------------------------- Gallery Stuff -------------------------
document.addEventListener('DOMContentLoaded', function() {



const track = document.querySelector('.track');
const slides = Array.from(track.children);
const next = document.querySelector('.right');
const prev = document.querySelector('.left');
const dotsNav = document.querySelector('.nav-indicator');
const dots = Array.from('dotsNav.children');
const slideWidth = slides[0].getBoundingClientRect().width;

// auto arrange slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// move to prev slide
prev.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});

// move to next slide
next.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
});


});
 // dont delete