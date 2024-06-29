// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Active sections for animation on scroll
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

// Function to open live link 2
function openLive2() {
    let liveLink2 = "https://incomparable-cupcake-0fd9e6.netlify.app/";
    window.open(liveLink2, '_blank');
}

// Function to open code link 2
function openCode2() {
    let code2 = "https://github.com/Neetsin/Javascript";
    window.open(code2, '_blank');
}

// Function to open live link 1
function openLive1() {
    let liveLink1 = "https://library-management-system-mauve.vercel.app/";
    window.open(liveLink1, '_blank');
}

// Function to open code link 1
function openCode1() {
    let codeLink1 = "https://github.com/Neetsin/Library-Management-System";
    window.open(codeLink1, '_blank');
}

// Function to open live link 3
function openLive3() {
    let liveLink3 = "https://dainty-tiramisu-f10af7.netlify.app/";
    window.open(liveLink3, "_blank");
}

// Function to open code link 3
function openCode3() {
    let code3 = "https://github.com/Neetsin/BestbuyClone";
    window.open(code3, "_blank");
}

// Open live Zara link
function openLive() {
    window.open("https://neet1403.github.io/zara/", "_blank");
}

// Open GitHub profile link
function openCode() {
    window.open("https://github.com/Neetsin", "_blank");
}

// Function to download resume
function downloadResume() {
    var resumePath = 'https://drive.google.com/file/d/1DrFHkwztHpHOfy9sPBtv_l4hEgvMP0KN/view?usp=drive_link';
    var link = document.createElement('a');
    link.href = resumePath;
    link.download = 'YourResumeFileName.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
    var aboutImg = document.getElementById("abut-img");

    if (document.body.id === "home-page" && aboutImg) {
        aboutImg.style.display = "block";
    } else if (aboutImg) {
        aboutImg.style.display = "none";
    }
});

// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Arrow button element for scroll to top
let arrowButton = document.querySelector('.footer-iconTop a');

arrowButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Scroll smoothly to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
