const options = {
    rootMargin: '0px',
    threshold: 1.0
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const points = entry.target.querySelector('.points');
            points.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, options);

const pointsContainer = document.querySelector('.points-container');
observer.observe(pointsContainer);


const zoomableImages = document.querySelectorAll('.zoomable');
zoomableImages.forEach((image) => {
  image.addEventListener('load', () => {
    image.classList.add('zoomed');
  });
});


const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');
const navBar = document.querySelector('.sticky-nav');


burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');

    // Burger Animation
    burger.classList.toggle('toggle');
});


// Set the initial position of the navbar
let navBarTop = navBar.offsetTop;

// Function to handle scroll event
function handleScroll() {
  // If the user has scrolled past the navbar, make the background transparent
  if (window.pageYOffset >= navBarTop) {
    navBar.style.backgroundColor = 'transparent';
  } else {
    navBar.style.backgroundColor = '#000';
  }
}

// Add an event listener for the scroll event
window.addEventListener('scroll', handleScroll);

// Add an event listener for the burger menu icon
burger.addEventListener('click', () => {
  // Toggle the burger menu icon
  burger.classList.toggle('toggle');

  // Toggle the nav-links menu
  navLinks.classList.toggle('nav-active');

  // Animate the nav-links li items
  navLinksLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});



