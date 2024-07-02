// Hamburger menu

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });



// Header style when scrolled
const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    
});
