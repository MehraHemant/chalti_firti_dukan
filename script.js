const services = document.getElementById("services");

function handleNavItemClick(e) {
  e.preventDefault();
  console.log("handleNavItemClicked", e);
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function handleClickOutsideBox(event) {
  const dropdown = document.getElementById("dropdown");
  const services = document.getElementById("services");

  if (
    dropdown &&
    !dropdown.contains(event.target) &&
    (!services || !services.contains(event.target))
  ) {
    dropdown.classList.add("hidden");
  }
});

const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;

let index = 0;

// Adjust index and translateX
const updateCarousel = () => {
  carousel.style.transform = `translateX(-${100 * (index)}%)`;
};

// Move to next slide
const nextSlide = () => {
  if (index >= totalSlides - 1) {
    carousel.style.transition = 'none';
    index = 0;
    updateCarousel();
  } else {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    index++;
    updateCarousel();
  }
};

// Move to previous slide
const prevSlide = () => {
  if (index <= 0) {
    carousel.style.transition = 'none';
    index = totalSlides - 1;
    updateCarousel();
  } else {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    index--;
    updateCarousel();
  }
};

// Event Listeners for navigation
carousel.style.transition = 'transform 0.5s ease-in-out';
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Initialize carousel
