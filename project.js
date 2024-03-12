const slides = document.querySelectorAll(".slide");
var counter = 0;

/* function to increment the left property to make each photo move 100 x its index property */
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    slideImage();
};

const goPrev = () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = slides.length - 1;
    }
    slideImage();
};
