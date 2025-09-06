// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('-translate-y-full');
    mobileMenu.classList.toggle('translate-y-0');
});

// Testimonial carousel navigation
const carousel = document.getElementById('testimonial-carousel');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Check for button existence before adding event listeners
if (prevButton && nextButton) {
    nextButton.addEventListener('click', () => {
        const cardWidth = carousel.querySelector('div').offsetWidth;
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
    
    prevButton.addEventListener('click', () => {
        const cardWidth = carousel.querySelector('div').offsetWidth;
        carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
}
