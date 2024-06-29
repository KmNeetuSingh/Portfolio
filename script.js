// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scrollc
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
function openLive2() {
    let livelink2 = "https://incomparable-cupcake-0fd9e6.netlify.app/";
    window.open(livelink2, '_blank');
}
function openCode2() {
    let code2 = "https://github.com/Neetsin/Javascript";
    window.open(code2, '_blank');
}

function openLive1() {

    let liveLink = "https://prismatic-monstera-e18d13.netlify.app/";

    window.open(liveLink, '_blank');
}

function openCode1() {
    let codeLink = "https://github.com/Neetsin/Movie-app";

    window.open(codeLink, '_blank');
}

function openLive() {
    window.open("https://library-management-system-mauve.vercel.app/", "_blank");
}

function openCode() {
    window.open("https://github.com/Neetsin/Library-Management-System", "_blank");
}
function openCode3() {
    let code3 = "https://github.com/Neetsin/BestbuyClone";
    window.open(code3, "_blank");
}

function openLive3() {
    let Live3 = "https://dainty-tiramisu-f10af7.netlify.app/";
    window.open(Live3, "_blank");
}


document.addEventListener("DOMContentLoaded", function () {
    var aboutImg = document.getElementById("abut-img");

    if (document.body.id === "home-page" && aboutImg) {
        aboutImg.style.display = "block";
    } else if (aboutImg) {
        aboutImg.style.display = "none";
    }
});
function downloadResume() {

    var resumePath = 'https://drive.google.com/file/d/1DrFHkwztHpHOfy9sPBtv_l4hEgvMP0KN/view?usp=drive_link';


    var link = document.createElement('a');
    link.href = resumePath;
    link.download = 'YourResumeFileName.pdf';
    document.body.appendChild(link);


    link.click();


    document.body.removeChild(link);
}

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
// Arrow button element
let arrowButton = document.querySelector('.footer-iconTop a');


arrowButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Scroll smoothly to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



