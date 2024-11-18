const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.classList.toggle("hidden");
});

function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("hidden");
}

const mobileMenuButton = document.getElementById('mobile-menu-button');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

function toggleMobileDropdown() {
  const mobileDropdownMenu = document.getElementById('mobile-dropdownMenu');
  mobileDropdownMenu.classList.toggle('hidden');
}