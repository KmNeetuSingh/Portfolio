// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // Active sections for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when clicking navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // Animation footer on scroll
  let footer = document.querySelector("footer");
  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

document.addEventListener("DOMContentLoaded", function () {
  var aboutImg = document.getElementById("abut-img");

  if (document.body.id === "home-page" && aboutImg) {
    aboutImg.style.display = "block";
  } else if (aboutImg) {
    aboutImg.style.display = "none";
  }
});

function downloadResume() {
  var resumePath =
    "https://drive.google.com/file/d/1tUeirJmUH43RA_6xg6uKx2ZaTWPnfSBS/view?usp=sharing";

  var link = document.createElement("a");
  link.href = resumePath;
  link.download = "YourResumeFileName.pdf";
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// Arrow button element
let arrowButton = document.querySelector(".footer-iconTop a");

arrowButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Scroll smoothly to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const techItems = document.querySelectorAll(".tech-item");
const techNameDisplay = document.getElementById("tech-name-display");

techItems.forEach((item) => {
  item.addEventListener("click", () => {
    const techName = item.getAttribute("data-tech");
    techNameDisplay.textContent = techName;
  });
});
