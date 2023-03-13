var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.4em solid #445C5F; color: #445C5F;  text-decoration: none !important;}";
  document.body.appendChild(css);
};

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



