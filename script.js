
    // =================== NAVIGATION MENU ===================
const menuBtn = document.getElementById('menu-btn');
const slideMenu = document.getElementById('slideMenu');
const closeMenuBtn = document.getElementById('closeMenu'); // ✅ X button

// Overlay
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Toggle menu open/close
menuBtn.addEventListener('click', () => {
  const isActive = menuBtn.classList.toggle('active');
  slideMenu.classList.toggle('show', isActive);
  overlay.classList.toggle('show', isActive);
  menuBtn.setAttribute("aria-expanded", isActive);
});

// Close with X button
closeMenuBtn.addEventListener('click', () => {
  slideMenu.classList.remove('show');
  menuBtn.classList.remove('active');
  overlay.classList.remove('show');
  menuBtn.setAttribute("aria-expanded", "false");

  // ✅ Collapse all dropdowns when menu closes
  document.querySelectorAll('.slide-menu .dropdown').forEach(dropdown => {
    dropdown.classList.remove('active');
  });
});

// Close dropdowns when clicking outside slide menu
document.addEventListener('click', (event) => {
  const isInsideMenu = event.target.closest('#slideMenu');
  const isMenuButton = event.target.closest('#menu-btn');

  if (!isInsideMenu && !isMenuButton) {
    document.querySelectorAll('.slide-menu .dropdown').forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  }
});

// Dropdown toggle
function toggleDropdown(element) {
  element.classList.toggle('active');
  document.querySelectorAll('.slide-menu .dropdown').forEach(other => {
    if (other !== element) other.classList.remove('active');
  });
}

// =================== SEARCH REDIRECTS ===================
document.getElementById("openSearch").addEventListener("click", () => {
  window.location.href = "search.html";
});

document.getElementById("openSearchMobile").addEventListener("click", () => {
  window.location.href = "search.html";
  slideMenu.classList.remove('show');
  menuBtn.classList.remove('active');
  overlay.classList.remove('show');
  menuBtn.setAttribute("aria-expanded", "false");
});
