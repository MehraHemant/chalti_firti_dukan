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
  let oldIndex = index;
  if (index >= totalSlides - 1) {
    carousel.style.transition = 'none';
    index = 0;
    updateCarousel();
    updateImageSlider(oldIndex);
  } else {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    index+=1;
    updateCarousel();
    updateImageSlider(oldIndex);
  }
};

// Move to previous slide
const prevSlide = () => {
  let oldIndex = index;
  if (index <= 0) {
    carousel.style.transition = 'none';
    index = totalSlides - 1;
    updateCarousel();
    updateImageSlider(oldIndex);
  } else {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    index--;
    updateCarousel();
    updateImageSlider(oldIndex);
  }
};

// Next slide images
const imageWrapperWidth = document.getElementById('image-wrapper').offsetWidth + 'px';
const imageSlider = document.getElementById('image-slider')
const imageSlides = Array.from(imageSlider.children);
const totalImageSlider = imageSlides.length;

imageSlides.forEach((slide) => {
  slide.classList.add(`w-[${imageWrapperWidth}]`);
});

const updateImageSlider = (oldIndex) => {
  imageSlider.style.transition = 'transform 0.5s ease-in-out';
  imageSlides[oldIndex].style.display = 'none';
  imageSlides[index].style.display = 'grid';
}

// Event Listeners for navigation
carousel.style.transition = 'transform 0.5s ease-in-out';
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Initialize carousel
