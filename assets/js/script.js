/* ======================================================= 
========================= Loader =========================
======================================================= */
var loader = document.querySelector(".section-loader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/* ======================================================= 
====================== Mobaile Menu ======================
======================================================= */
const openedMenu = document.querySelector(".opened-menu-btn");
const closedMenu = document.querySelector(".closed-menu-btn");
const navbarMenu = document.querySelector(".navbar-area");
const menuOverlay = document.querySelector(".menu-overlay");

openedMenu.addEventListener("click", toggleMenu);
closedMenu.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

function toggleMenu() {
  navbarMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("scrolling");
}

navbarMenu.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
    event.preventDefault();
    const menuItemHasChildren = event.target.parentElement;

    if (menuItemHasChildren.classList.contains("active")) {
      collapseSubMenu();
    } else {
      if (navbarMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
      menuItemHasChildren.classList.add("active");
      const subMenu = menuItemHasChildren.querySelector(".sub-menu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
});

function collapseSubMenu() {
  navbarMenu
    .querySelector(".menu-item-has-children.active .sub-menu")
    .removeAttribute("style");
  navbarMenu
    .querySelector(".menu-item-has-children.active")
    .classList.remove("active");
}

function resizeScreen() {
  if (navbarMenu.classList.contains("active")) {
    toggleMenu();
  }

  if (navbarMenu.querySelector(".menu-item-has-children.active")) {
    collapseSubMenu();
  }
}

window.addEventListener("resize", () => {
  if (this.innerWidth > 992) {
    resizeScreen();
  }
});

/* ======================================================= 
=================== Scroll Back To Top =================== 
======================================================= */
var mybutton = document.getElementById("scroll-up-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.opacity = "1";
    mybutton.style.right = "3rem";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.right = "-10rem";
  }
}
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ======================================================= 
================ Projects Section Slider ================= 
======================================================= */
var swiper = new Swiper('.projects-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 2500,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

/* ======================================================= 
================ Mechanic Section Slider ================= 
======================================================= */
var swiper = new Swiper('.mechanic-slider', {
  slidesPerView: 1,
  spaceBetween: 34,
  loop: true,
  speed: 2500,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

/* ======================================================= 
====================== Packages Tab ====================== 
======================================================= */
function openPackages(evt, PackagesName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("packages-tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(PackagesName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

/* ======================================================= 
============== Testimonial Section Slider ================ 
======================================================= */
var swiper = new Swiper('.testimonial-slider', {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  speed: 2500,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});