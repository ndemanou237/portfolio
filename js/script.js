// =======================
// MENU MOBILE
// =======================

const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// =======================
// DARK / LIGHT MODE
// =======================

const themeBtn = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
    document.body.classList.add("light");
    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

// =======================
// SCROLL HEADER
// =======================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow = "none";
    }

});

// =======================
// BACK TO TOP
// =======================

const scrollTopBtn =
document.querySelector("#scroll-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// =======================
// ACTIVE LINK
// =======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === `#${current}`
        ){
            link.classList.add("active");
        }

    });

});

// =======================
// SCROLL ANIMATION
// =======================

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show-element");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
".skill-card,.tool-card,.project-card,.contact-card,.about-card"
)
.forEach(el => {

    el.classList.add("hidden-element");

    observer.observe(el);

});

// =======================
// CLOSE MENU MOBILE
// =======================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});