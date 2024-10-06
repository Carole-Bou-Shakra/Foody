// Slider 1: Multiple images in a row (3 images per row)
// Slider JavaScript
const slider = document.querySelector('.image-slider-container .slider');
const totalCards = document.querySelectorAll('.image-slider-container .card').length;
const cardsPerRow = 3;
const cardWidth = 270; // 240px card + 30px gap
let currentPosition = 0;

// Set the total width of the slider based on the number of cards
slider.style.width = `${totalCards * cardWidth}px`;

function slideRowLeft() {
    if (currentPosition === 0) {
        // Move instantly to the last set of cards
        currentPosition = Math.ceil(totalCards / cardsPerRow) - 1;
        slider.style.transition = 'none'; // Disable animation for instant jump
        updateSlider();
        setTimeout(() => {
            slider.style.transition = 'transform 0.9s ease'; // Re-enable animation
            currentPosition--;
            updateSlider();
        }, 20);
    } else {
        currentPosition--;
        updateSlider();
    }
}

function slideRowRight() {
    const totalRows = Math.ceil(totalCards / cardsPerRow);
    if (currentPosition >= totalRows - 1) {
        currentPosition = 0;
        slider.style.transition = 'none'; // Disable animation for instant jump
        updateSlider();
        setTimeout(() => {
            slider.style.transition = 'transform 0.9s ease'; // Re-enable animation
            currentPosition++;
            updateSlider();
        }, 20);
    } else {
        currentPosition++;
        updateSlider();
    }
}

function updateSlider() {
    const transformValue = -currentPosition * (cardsPerRow * cardWidth); // Move by 3 cards width
    slider.style.transform = `translateX(${transformValue}px)`;
}


// Slider 2: Single image slider
const singleSlider = document.querySelector('.single-image-slider-container .slider');
const singleSlides = document.querySelectorAll('.single-image-slider-container .slide');
let currentSinglePosition = 0;

function slideSingleLeft() {
    if (currentSinglePosition === 0) {
        currentSinglePosition = singleSlides.length - 1;
    } else {
        currentSinglePosition--;
    }
    updateSingleSlider();
}

function slideSingleRight() {
    if (currentSinglePosition >= singleSlides.length - 1) {
        currentSinglePosition = 0;
    } else {
        currentSinglePosition++;
    }
    updateSingleSlider();
}

function updateSingleSlider() {
    const singleSlideWidth = singleSlides[0].clientWidth; // Get the width of a single slide
    const transformValue = -currentSinglePosition * singleSlideWidth;
    singleSlider.style.transform = `translateX(${transformValue}px)`;
}

// Auto-play slider for the single image slider
function showNextImage() {
    slideSingleRight(); // Automatically move to the next image
}

setInterval(showNextImage, 3000); // Change image every 3 seconds