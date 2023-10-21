



window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const getDownFlooring = document.querySelector('#GetDownFlooring');

    if (window.scrollY > 100) {
        getDownFlooring.textContent = 'GDF';
        getDownFlooring.style.fontSize = '20px';
        //if scroll opposite, reset:
    } else {
        getDownFlooring.style.fontSize = '40px';
        getDownFlooring.textContent = 'Get Down Flooring, Inc.';
    }
});
