const slides = Array.from(document.querySelectorAll(".slide"));
const slider = document.querySelector('.slider');


function automaticSlider() {
    const activeSlide = document.querySelector('.slide.active');
    const nextSlide = activeSlide.nextElementSibling;
    const prevSlide = activeSlide.previousElementSibling;
    const nextSlideIndex = slides.indexOf(nextSlide);

    activeSlide.style.transform = 'translateX(-100%)';
    activeSlide.classList.remove('active');

    if (nextSlideIndex == 0) { 
        slides[1].style = "";
    }
    if (nextSlideIndex == 1) { 
        slides[2].style = "";
    }
    if (nextSlideIndex == 2) { 
        slides[0].style = "";
    }
    
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active');
        activeSlide.nextElementSibling.style.transform = 'translateX(0)';
    } else {
        slides[0].classList.add('active');
        slides[0].style.transform = 'translateX(0)';
    }
}
    
setInterval(automaticSlider, 3000);

function changeSize(){
    const sliderHeight = document.getElementById("image").scrollHeight;

    slider.style.height = sliderHeight + "px";
}

setInterval(changeSize, 500);


