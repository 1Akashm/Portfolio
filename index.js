const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".bar");
const nav_header = document.querySelector(".header-navbar");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  bar.classList.toggle("bar1");
  nav_header.classList.toggle("show-nav");
});

// to rotate the active class in nav_header

const headerNavbar = document.querySelector(".header-navbar");
const navItems = headerNavbar.querySelectorAll("a");

navItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    // Remove 'active' class from all items
    navItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Add 'active' class to the clicked item
    item.classList.add("active");
  });
});

//
const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function startEffect() {
  const h3Element = document.querySelector("h3");

  function applyEffect() {
    var iteration = 0;
    const originalName = h3Element.dataset.value;
    const shuffledName = originalName.split("").sort(() => Math.random() - 0.5);

    var interval = setInterval(() => {
      h3Element.innerText = shuffledName
        .map((letter, index) => {
          if (index < iteration) {
            return originalName[index];
          }

          return letter;
        })
        .join("");

      if (iteration >= originalName.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }

  applyEffect();

  setInterval(applyEffect, 5000);
}

// Call the function to start the effect
startEffect();

//onclick scroll to directed section
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".header-navbar a");

  function highlightNavItem() {
    let fromTop = window.scrollY;

    navItems.forEach(function (item) {
      let section = document.querySelector(item.getAttribute("href"));

      if (
        (section.offsetTop <= fromTop + 100 &&
          section.offsetTop + section.offsetHeight > fromTop + 100) ||
        (fromTop < 100 && item.getAttribute("href") === "#home")
      ) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavItem);
  window.addEventListener("load", highlightNavItem);

  navItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      let targetId = this.getAttribute("href");
      let targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
