// DOM elements
const filterToggle = document.querySelector(".filter-toggle");
const filters = document.querySelector(".filters");
const closeFilters = document.querySelector(".close-filters");
const applyFiltersBtn = document.querySelector(".apply-filters-btn");
const heartIcons = document.querySelectorAll(".heart-icon");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const navMenu = document.querySelector(".nav-menu");

// Toggle filters sidebar on mobile
if (filterToggle) {
  filterToggle.addEventListener("click", function () {
    filters.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
  });
}

// Close filters sidebar
if (closeFilters) {
  closeFilters.addEventListener("click", function () {
    filters.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  });
}

// Apply filters and close sidebar
if (applyFiltersBtn) {
  applyFiltersBtn.addEventListener("click", function () {
    filters.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
    // Additional filter application logic can go here
  });
}

// Toggle heart/favorite icons
heartIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    this.classList.toggle("fas");
    this.classList.toggle("far");
    this.classList.toggle("active");
  });
});

// Mobile menu toggle
if (mobileMenuIcon) {
  mobileMenuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
}

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll(".dropdown.active");

  dropdowns.forEach((dropdown) => {
    // If the click is outside the dropdown
    if (!dropdown.contains(event.target) && !event.target.matches(".dropdown-toggle")) {
      dropdown.classList.remove("active");
    }
  });

  // Also close mobile menu if clicked outside
  if (navMenu && navMenu.classList.contains("active")) {
    if (!navMenu.contains(event.target) && !event.target.matches(".mobile-menu-icon")) {
      navMenu.classList.remove("active");
    }
  }
});

// Initialize any dropdown toggles
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const parent = this.closest(".dropdown");

    // Close all other dropdowns
    document.querySelectorAll(".dropdown.active").forEach((d) => {
      if (d !== parent) {
        d.classList.remove("active");
      }
    });

    // Toggle this dropdown
    parent.classList.toggle("active");
  });
});

// Close modals with escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // Close filters if open
    if (filters && filters.classList.contains("active")) {
      filters.classList.remove("active");
      document.body.style.overflow = "";
    }

    // Close mobile menu if open
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }

    // Close any open dropdowns
    document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});
