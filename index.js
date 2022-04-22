document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return;

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })  
})

const displayArrow = () => {
  const feature = document.getElementById('feature')
  const company = document.getElementById('company')
  const featureDown = document.querySelector('.feature-down')
  const featureUp = document.querySelector('.feature-up')
  const companyDown = document.querySelector(".company-down");
  const companyUp = document.querySelector(".company-up");
  feature.addEventListener('click', () => {
    if (featureDown.classList.contains("hide")) {
      featureDown.classList.remove("hide");
      featureUp.classList.add("hide");
    } else {
      featureDown.classList.add("hide");
      featureUp.classList.remove("hide");
    }
  });
  company.addEventListener("click", () => {
    if (companyDown.classList.contains('hide')) {
      companyDown.classList.remove("hide");
      companyUp.classList.add("hide");
    } else {
      companyDown.classList.add("hide");
      companyUp.classList.remove("hide");
    } 
  });
}

// mobile menu 

displayArrow();
