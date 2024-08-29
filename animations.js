const serviceContainer = document.getElementById("service-container");
const dropdown = document.getElementById("service-dropdown");
const mobileNav = document.getElementById("mobile-nav-btn");
const mobileNavPanel = document.getElementById("mobile-nav-panel");
const tabImg = document.getElementById("tab-img");
const tabHeading = document.getElementById("tab-heading");
const tabDesc = document.getElementById("tab-desc");
const backwindow = document.getElementById("mobile-nav-panel-wrapper");
const tabHeadingsecond = document.getElementById("tab-heading-secondary");
const tabDescsecond = document.getElementById("tab-desc-secondary");
const tabImgsecond = document.getElementById("tab-img-secondary");
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
const mob_data1 = [
  {
    heading: "Wisho",
    description:
      "A Platform to Empower Admin Wishes This web solution is a centralized hub for streamlining interactions with users",
    image: "/assets/wisho.png",
  },
  {
    heading: "Hyve",
    description:
      "Revolutionize your shopping experience with Hyve, a cutting-edge app that brings convenience and speed to your doorstep, making everyday essentials just a tap away.",
    image: "/assets/hyve.png",
  },
  {
    heading: "Parking 24",
    description:
      "Simplify parking management with Parking24, an innovative platform that facilitates seamless coordination between parking owners and consumers, ensuring hassle-free parking solutions.",
    image: "/assets/parking24.png",
  },
];
const mob_data2 = [
  {
    desc: "With our extensive resources, Hyve can swiftly become your reliable IT partner for mobile development on iOS:",
    p1: "Over 90 high-load iOS apps delivered",
    p2: "More than 130 skilled iOS engineers in our team",
    p3: "35% of our staff are senior specialists and team leaders",
    p4: "9 years of combined iOS experience",
  },
  {
    desc: "Hyve has everything in place to quickly start working on your mobile application development project for Android, tailored to your needs:",
    p1: "Over 110 modern Android apps delivered",
    p2: "More than 120 skilled Android engineers on our team",
    p3: "40% of whom are senior specialists and team leaders",
    p4: "13 years of experience with Android",
  },
  {
    desc: "Hyve is the ideal choice for your cross-platform development projects. We have the expertise to deliver complete and timely solutions:",
    p1: "Over 100 cross-platform experts employed",
    p2: "35% of whom are senior specialists and team leads",
    p3: "More than 80 cross-platform projects successfully completed",
  },
];
const web_data = [
  {
    heading: "Web Application Development",
    desc: "At Hyve, our web engineering specialists craft and refine optimized web solutions that empower your users to efficiently achieve their goals online.",
    image: "/assets/web_development_application_banner.png",
  },
  {
    heading: "Custom Web Development",
    desc: "Hyve is fully equipped with the expertise and resources to support any project you outsource in the Custom Web Development space. Whether it's tackling UI/UX challenges, ensuring responsiveness, optimizing performance, or addressing any other needs, we unlock the full potential of web technologies for your business.",
    image: "/assets/custom_web_devlopment_banner.png",
  },
  {
    heading: "Staff Augmentation",
    desc: "When your project requires additional web development expertise, Hyve swiftly allocates the skilled talent you need, all within your budget. With a proven track record of delivering custom projects, we understand the power of effective Staff Augmentation.",
    image: "/assets/staff_argumentation.png",
  },
  {
    heading: "Technological Partnership",
    desc: "As your technology partner, Hyve goes beyond the role of a traditional service provider. We collaborate closely with your organization, driving growth and innovation. More than just a vendor, we help shape your corporate strategies and create a competitive IT landscape.",
    image: "/assets/technology_partnership.png",
  },
];
const web_data1 = [
  {
    heading: "Wisho Website",
    desc: "A Platform to Empower Admin Wishes This web solution is a centralized hub for streamlining interactions with users",
    image: "/assets/wisho_about_us.png",
  },
  {
    heading: "MakeMyDesign Website",
    desc: "A Design Portal for Creative Collaborations This web platform serves as a centralized space for seamless interactions with clients",
    image: "/assets/makemy_design_about_us.png",
  },
  {
    heading: "Wow Cabs Website",
    desc: "A Central Hub for Booking and Managing Cab Services This web solution acts as a centralized platform for engaging with customers",
    image: "/assets/wow_cabs.png",
  },
];
const web_data2 = [
  {
    desc: "A Platform to Empower Admin Wishes This web solution is a centralized hub for streamlining interactions with users:",
    p1: "Enhanced customer support",
    p2: "Seamless dissemination of announcements",
    p3: "Streamlined communication for efficient wish management",
    p4: "Integrated transaction handling",
  },
  {
    desc: "A Design Portal for Creative Collaborations This web platform serves as a centralized space for seamless interactions with clients:",
    p1: "Personalized customer service for designers and clients",
    p2: "Easy sharing and updating of design concepts and information",
    p3: "Effective communication channels for feedback and revisions",
    p4: "Management of payments and project transactions",
  },
  {
    desc: "A Central Hub for Booking and Managing Cab Services This web solution acts as a centralized platform for engaging with customers:",
    p1: "Reliable customer service for ride bookings and inquiries",
    p2: "Clear communication of fare details and service information",
    p3: "Streamlined communication for ride management",
    p4: "Secure transaction processing for payments and billing",
  },
];
const cross_data = [
  {
    heading:"Custom Cross-Platform Development",
    desc:"Contact us to create a cross-platform app tailored to any purpose and industry."
  },
  {
    heading:"Cross-Platform App Development Consulting",
    desc:"Hyve offers expert guidance and professional advice for your cross-platform mobile application development."
  },
  {
    heading:"Cross-Platform App Migration",
    desc:"Hyve provides a seamless and secure process for converting your app to a cross-platform solution with minimal challenges."
  },
  {
    heading:"Cross-Platform App Design",
    desc:"Designing for cross-platform development can be complex. Hyve's experts are here to navigate and resolve these challenges."
  },
  {
    heading:"Support and Maintenance",
    desc:"Hyve's experienced cross-platform support engineers ensure your app operates flawlessly with maximum uptime."
  },
  {
    heading:"Cross-Platform App QA",
    desc:"Consult with our cross-platform app testing specialists to proactively identify and address any potential bugs."
  },
]
function changeTabs(mod, index) {
  let currentTab = index;
  if (mod === "mob") {
    tabHeading.innerHTML = mob_data[currentTab].heading;
    tabDesc.innerHTML = mob_data[currentTab].desc;
    tabImg.src = mob_data[currentTab].imgPath;
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
    } else {
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
    } else {
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
    } else {
      document.getElementById("bestfor-wrapper").style.display = "none";
    }
  } else if (mod === "mob1") {
    tabHeadingsecond.innerHTML = mob_data1[currentTab].heading;
    tabDescsecond.innerHTML = mob_data1[currentTab].description;
    tabImgsecond.src = mob_data1[currentTab].image;
  } else if (mod === "mob2") {
    document.getElementById("tab-desc-1").innerHTML =
      mob_data2[currentTab].desc;
    document.getElementById("tab-p-1").innerHTML = mob_data2[currentTab].p1;
    document.getElementById("tab-p-2").innerHTML = mob_data2[currentTab].p2;
    document.getElementById("tab-p-3").innerHTML = mob_data2[currentTab].p3;
    if (!mob_data2[currentTab].p4) {
      document.getElementById("tab-p-4").innerHTML = "";
    } else {
      document.getElementById("tab-p-4").innerHTML = mob_data2[currentTab].p4;
    }
  } else if (mod === "web") {
    tabHeading.innerHTML = web_data[currentTab].heading;
    tabDesc.innerHTML = web_data[currentTab].desc;
    tabImg.src = web_data[currentTab].image;
  } else if (mod === "web1") {
    tabHeadingsecond.innerHTML = web_data1[currentTab].heading;
    tabDescsecond.innerHTML = web_data1[currentTab].desc;
    tabImgsecond.src = web_data1[currentTab].image;
  } else if (mod === "web2") {
    document.getElementById("tab-desc-1").innerHTML =
      mob_data2[currentTab].desc;
    document.getElementById("tab-p-1").innerHTML = web_data2[currentTab].p1;
    document.getElementById("tab-p-2").innerHTML = web_data2[currentTab].p2;
    document.getElementById("tab-p-3").innerHTML = web_data2[currentTab].p3;

    document.getElementById("tab-p-4").innerHTML = web_data2[currentTab].p4;
  }else if(mod==="crss"){

    tabHeading.innerHTML = cross_data[currentTab].heading;
    tabDesc.innerHTML = cross_data[currentTab].desc;
    tabImg.src = cross_data[currentTab].image;
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
  backwindow.addEventListener("click", closeMobileNav);
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
  );
  const tl = gsap.timeline();
  tl.to(backwindow, {
    display: "block",
    opacity: 0.7,
    duration: 0.5,
    ease: "power3.out",
  });
  tl.to(mobileNavPanel, {
    right: 0,
    opacity: 100,
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
    display: "none",
    duration: 0.5,
    ease: "power3.out",
  });
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
