document.addEventListener('click', (e) => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});

const displayArrow = () => {
  const feature = document.getElementById('feature');
  const featureMobile = document.getElementById('feature-mobile');
  const company = document.getElementById('company');
  const companyMobile = document.getElementById('company-mobile');
  const featureDown = document.querySelector('.feature-down');
  const featureDownMobile = document.querySelector('.feature-down-mobile');
  const featureUp = document.querySelector('.feature-up');
  const featureUpMobile = document.querySelector('.feature-up-mobile');
  const companyDown = document.querySelector('.company-down');
  const companyDownMobile = document.querySelector('.company-down-mobile');
  const companyUp = document.querySelector('.company-up');
  const companyUpMobile = document.querySelector('.company-up-mobile');

  featureMobile.addEventListener('click', () => {
    if (featureDownMobile.classList.contains('hide')) {
      featureDownMobile.classList.remove('hide');
      featureUpMobile.classList.add('hide');
    } else {
      featureDownMobile.classList.add('hide');
      featureUpMobile.classList.remove('hide');
    }
  });

  feature.addEventListener('click', () => {
    if (featureDown.classList.contains('hide')) {
      featureDown.classList.remove('hide');
      featureUp.classList.add('hide');
    } else {
      featureDown.classList.add('hide');
      featureUp.classList.remove('hide');
    }
  });

  companyMobile.addEventListener('click', () => {
    if (companyDownMobile.classList.contains('hide')) {
      companyDownMobile.classList.remove('hide');
      companyUpMobile.classList.add('hide');
    } else {
      companyDownMobile.classList.add('hide');
      companyUpMobile.classList.remove('hide');
    }
  });

  company.addEventListener('click', () => {
    if (companyDown.classList.contains('hide')) {
      companyDown.classList.remove('hide');
      companyUp.classList.add('hide');
    } else {
      companyDown.classList.add('hide');
      companyUp.classList.remove('hide');
    }
  });
};

// mobile menu

const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const closeBtn = document.getElementById('close-menu');
const overlay = document.getElementById('overlay');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

displayArrow();
