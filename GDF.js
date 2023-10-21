
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
