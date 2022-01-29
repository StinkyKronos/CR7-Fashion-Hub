const slides = Array.from(document.querySelectorAll(".slide"));
const slider = document.querySelector('.slider');



function automaticSlider() {
    const activeSlide = document.querySelector('.slide.active');
    
    activeSlide.style.transform = 'translateX(-100%)';
    activeSlide.classList.remove('active');
    activeSlide.addEventListener('transitionend', function () {
        activeSlide.classList.remove('active');
    }
    );
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active');
        activeSlide.nextElementSibling.style.transform = 'translateX(0)';
    } else {
        slides[0].classList.add('active');
        slides[0].style.transform = 'translateX(0)';
    }
}
    
setInterval(automaticSlider, 3000);



