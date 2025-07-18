document.addEventListener('DOMContentLoaded', () => {
  // ********************
  console.log('The DOM is ready');
  // ********************
  // Get references to the button and the menu
  const menuDrawerButton = document.getElementById('header__menu-drawer');
  const navMenu = document.getElementById('nav-menu');
  const menuDrawerIcon = menuDrawerButton.querySelector('.menu-drawer__icon');
  // ********************
  // Hide nav on load
  if (window.innerWidth >= 440) {
    navMenu.classList.toggle('hidden');
  }
  // Add a click event listener to the button
  menuDrawerButton.addEventListener('click', () => {
    // Toggle the 'hidden' class on the menu
    navMenu.classList.toggle('hidden');
    // Toggle the 'open' class on the menu drawer icon for animation

    menuDrawerIcon.classList.toggle('open');
  });
  // ********************
  // Close the menu when a link is clicked (for single-page navigation)
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 440) {
        if (!navMenu.classList.contains('hidden')) {
          navMenu.classList.add('hidden');
          menuDrawerIcon.classList.remove('open');
        }
      }
    });
  });
  // ********************
  // Close the menu when clicking outside of it (for larger screens)
  document.addEventListener('click', (event) => {
    if (window.innerWidth <= 440) {
      // Check if the click was outside the menu and the button
      if (
        !menuDrawerButton.contains(event.target) &&
        !navMenu.contains(event.target) &&
        !navMenu.classList.contains('hidden')
      ) {
        navMenu.classList.add('hidden');
        menuDrawerIcon.classList.remove('open');
      }
    }
  });
  // ********************
  // Close menu on resize if it's open and switches to desktop view
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 440 && !navMenu.classList.contains('hidden')) {
      // 768px is Tailwind's 'md' breakpoint
      navMenu.classList.add('hidden');
      menuDrawerIcon.classList.remove('open');
    }
    // make nav visible if >440px
    if (window.innerWidth > 440 && navMenu.classList.contains('hidden')) {
      navMenu.classList.remove('hidden');
    }
  });
});
// ********************
// Splide slider values
Splide.defaults = {
  type: 'slide',
  // rewind: true,
  // rewindSpeed: 1000,
  pagination: true,
  arrows: false,
  width: '1080px',
  classes: {
    pagination: 'splide__pagination pagination__block',
    page: 'splide__pagination__page pagination__button',
  },
};

// Init slider
document.addEventListener('DOMContentLoaded', function () {
  let elms = document.getElementsByClassName('splide');
  for (let i = 0; i < elms.length; i++) {
    new Splide(elms[i]).mount();
  }
});
