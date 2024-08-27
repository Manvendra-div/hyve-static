const serviceContainer = document.getElementById("service-container");
const dropdown = document.getElementById("service-dropdown");
const mobileNav = document.getElementById("mobile-nav-btn");
const mobileNavPanel = document.getElementById("mobile-nav-panel");
const tabImg = document.getElementById("tab-img");
const tabHeading = document.getElementById("tab-heading");
const tabDesc = document.getElementById("tab-desc");
const backwindow=document.getElementById("mobile-nav-panel-wrapper")
const mob_data = [
  {
    heading: "Native Mobile App Development",
    desc: "Creating native Android and iOS apps maximizes the potential of mobile platforms, offering robust feature sets and a user-friendly experience with a seamless and intuitive design.",
    advantages: [
      "Superior app performance and speed",
      "User-friendly UI/UX design",
      "Enhanced security",
    ],
    limitations: [
      "High initial and maintenance costs",
      "Longer time-to-market",
      "Lack of code reusability",
    ],
    bestfor: [
      "Complex mobile applications",
      "High-performance needs and smooth UI",
      "Apps requiring extensive data processing",
    ],
    imgPath: "/assets/native-app-development.png",
  },
  {
    heading: "Cross-Platform App Development",
    desc: "Cross-platform engineering offers a path to sophisticated, secure, and lightweight apps. Our deliverables are tailored for multiple operating systems, ensuring they meet your expectations.",
    // advantages: ["Cost-effective", "Less time-consuming", "Easier maintenance"],
    imgPath: "/assets/cross_paltform_development.png",
  },
  {
    heading: "Hybrid App Development",
    desc: "Hybrid app development offers a unified and easily manageable code base, broad reach, cost-effective access to native features, and enhanced compatibility.",
    advantages: [
      "Faster updates",
      "Consistent user experience",
      "Enhanced analytics and scalability",
    ],
    limitations: [
      "Platform-specific limitations",
      "Potential security concerns",
      "Dependency on third-party plugins",
    ],
    bestfor: [
      "Basic functionality needs",
      "Quick development timelines",
      "Integration requirements",
    ],
    imgPath: "/assets/hybrid.png",
  },
  {
    heading: "Progressive Web App Development",
    desc: "The advantages of PWAs include a seamless user experience with features such as offline capabilities, push notifications, and the option to install on the home screen.",
    advantages: [
      "Improved discoverability",
      "Simplified installation",
      "Support for offline functionality",
    ],
    limitations: [
      "Limited exposure in app stores",
      "Restricted access to hardware features",
      "Performance constraints compared to native apps",
    ],
    bestfor: ["Enhanced SEO", "Reduced data usage", "Easier maintenance"],
    imgPath: "/assets/pwa.png",
  },
];
const web_data = [
  {}
]
function changeTabs(mod, index) {
  let currentTab = index;
  if (mod === "mob") {
    tabHeading.innerHTML = mob_data[currentTab].heading;
    tabDesc.innerHTML = mob_data[currentTab].desc;
    tabImg.attributes[0].value = mob_data[currentTab].imgPath;
    document.getElementById("advantages-box").innerHTML = "";
    document.getElementById("limitations-box").innerHTML = "";
    document.getElementById("bestfor-box").innerHTML = "";

    if (mob_data[currentTab].advantages) {
      document.getElementById("advantage-wrapper").style.display = "flex";
      mob_data[currentTab].advantages.map((item) => {
        const advantage = document.createElement("div");
        advantage.classList.add(
          "relative",
          "text-[#080907]",
          "inter-regular",
          "flex",
          "justify-normal"
        );

        advantage.innerHTML = `<div class="absolute top-2 p-1 bg-[#080907] rounded-full h-fit"></div><span class="ml-4">${item}</span>`;
        document.getElementById("advantages-box").appendChild(advantage);
      });
    }else{
      document.getElementById("advantage-wrapper").style.display = "none";
    }
    if (mob_data[currentTab].limitations) {
      document.getElementById("limitation-wrapper").style.display = "flex";
      mob_data[currentTab].limitations.map((item) => {
        const limitation = document.createElement("div");
        limitation.classList.add(
          "relative",
          "text-[#080907]",
          "inter-regular",
          "flex",
          "justify-normal"
        );

        limitation.innerHTML = `<div class="absolute top-2 p-1 bg-[#080907] rounded-full h-fit"></div><span class="ml-4">${item}</span>`;
        document.getElementById("limitations-box").appendChild(limitation);
      });
    }else{
      document.getElementById("limitation-wrapper").style.display = "none";
    }
    if (mob_data[currentTab].bestfor) {
      document.getElementById("bestfor-wrapper").style.display = "flex";
      mob_data[currentTab].bestfor.map((item) => {
        const bestfor = document.createElement("div");
        bestfor.classList.add(
          "relative",
          "text-[#080907]",
          "inter-regular",
          "flex",
          "justify-normal"
        );

        bestfor.innerHTML = `<div class="absolute top-2 p-1 bg-[#080907] rounded-full h-fit"></div><span class="ml-4">${item}</span>`;
        document.getElementById("bestfor-box").appendChild(bestfor);
      });
    }else{
      document.getElementById("bestfor-wrapper").style.display = "none";
    }
  }
}

function showDropdown() {
  gsap.to(dropdown, {
    display: "flex",
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

  backwindow.addEventListener("click",closeMobileNav)
  backwindow.classList.add(
    "hidden",
    "fixed",
    "left-0",
    "top-0",
    "w-full",
    "h-full",
    "bg-[#000000]",
    "opacity-0",
    "z-50"
  )
  const tl = gsap.timeline()
  tl.to(backwindow, {
    display:"block",
    opacity: 0.6,
    duration: 0.5,
    ease: "power3.out",
  })
  tl.to(mobileNavPanel, {
    right: 0,
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
  gsap.to(backwindow, {
    opacity: 0,
    display:"none",
    duration: 0.5,
    ease: "power3.out",
  })
  gsap.to(mobileNavPanel, {
    right: "-100%",
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
