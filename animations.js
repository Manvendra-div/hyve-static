const serviceContainer = document.getElementById("service-container");
const dropdown = document.getElementById("service-dropdown");
const mobileNav = document.getElementById("mobile-nav-btn");
const mobileNavPanel = document.getElementById("mobile-nav-panel");
function showDropdown() {
  gsap.to(dropdown, {
    display:"flex",
    opacity: 1,
    zIndex: 999,
    duration: 0.5,
    ease: "power3.out",
  });
}

function hideDropdown() {
  gsap.to(dropdown, {
    display: "none",
    opacity: 0,
    zIndex: -1,
    duration: 0.5,
    ease: "power3.out",
  });
}

function showMobileNav() {
  gsap.to(mobileNavPanel, {
    left: 0,
    zIndex: 999,
    duration: 0.5,
    ease: "power3.out",
  });
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  mobileNav.removeEventListener("click", showMobileNav);
  mobileNav.addEventListener("click", closeMobileNav);
}

function closeMobileNav() {
  gsap.to(mobileNavPanel, {
    left: "-100%",
    zIndex: 0,
    duration: 0.5,
    ease: "power3.out",
  });
  document.body.style.overflow = "auto";
  document.body.style.position = "";
  document.body.style.width = "";
  mobileNav.removeEventListener("click", closeMobileNav);
  mobileNav.addEventListener("click", showMobileNav);
}

serviceContainer.addEventListener("mouseenter", showDropdown);
serviceContainer.addEventListener("mouseleave", hideDropdown);
mobileNav.addEventListener("click", showMobileNav);
