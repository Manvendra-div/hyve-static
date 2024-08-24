const serviceContainer = document.getElementById("service-container");
const dropdown = document.getElementById("service-dropdown");

function showDropdown() {
  gsap.to(dropdown, {
    opacity: 1,
    zIndex:999,
    duration: 0.5,
    ease: "power3.out",
  });
}

function hideDropdown() {
  gsap.to(dropdown, {
    opacity: 0,
    zIndex: -1,
    duration: 0.5,
    ease: "power3.out",
  });
}
//  
// Show dropdown when mouse enters the container
serviceContainer.addEventListener("mouseenter", showDropdown);

// Hide dropdown when mouse leaves the container
serviceContainer.addEventListener("mouseleave", hideDropdown);
