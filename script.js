window.onload = function() {
    const image = document.querySelector('.animated-image');
    
    // Adding a small delay before the animation starts
    setTimeout(() => {
        image.classList.add('show');
    }, 500);
}

// Function to check if an element is in the viewport vertically
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to handle scroll animation
function handleScrollAnimation() {
    const introText = document.querySelector('.intro-text');
    const introImage = document.querySelector('.intro-image');

    if (isElementInViewport(introText)) {
        introText.classList.add('scroll-animation');
    }

    if (isElementInViewport(introImage)) {
        introImage.classList.add('scroll-animation');
    }
}

// Add event listener for scroll
window.addEventListener('scroll', handleScrollAnimation);

// Trigger the function on load to check the initial position
document.addEventListener('DOMContentLoaded', handleScrollAnimation);



