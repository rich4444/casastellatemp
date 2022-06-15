//NAVBAR
const navLinks = document.querySelectorAll(".nav-link");

function NavBarHandler() {
    navLinks.forEach((link) => {
        link.classList.remove("selected");
    });
    this.classList.add("selected");
}

navLinks.forEach((link) => {
    link.addEventListener("click", NavBarHandler);
});


//SWIPER
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

//Animate on Scroll
AOS.init();

//If form sent load with message
const modal = document.getElementsByClassName("modal-container")[0];
const modalButton = document.getElementsByClassName("modal-button")[0];

modalButton.addEventListener("click", () => {
    window.location.href = "";
    modal.classList.remove("toggle-modal");
    document.body.classList.remove("prevent-scroll");
});


const url = window.location.href;
if(url.includes("#contacted#")){
    modal.classList.remove("toggle-modal");
    document.body.classList.add("prevent-scroll");
}


//Scroll spy with intersection observer
//Intersection Observer
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

let options = {
    rootMargin: '0px',
    threshold: 0.5
}

const observer = new IntersectionObserver((entries, options) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            UpdateNavbar(entry.target);
        }
    });
});

sections.forEach((el) => {
    observer.observe(el);
});

function UpdateNavbar (sec){
    navLinks.forEach(nav => {
        if(nav.href.includes(sec.id)){
            nav.classList.add("selected");
        } else{
            nav.classList.remove("selected");
        }
    })
    
}

//Scroll down icon and back to top button
const backButton = document.getElementById("back-button");
const header = document.querySelector("header");

backButton.addEventListener("click", () => {
    header.scrollIntoView();
});

window.onscroll = () => {
    checkScroll();
};

function checkScroll() {
    if(window.scrollY <= 0){
        navLinks.forEach(nav => {
            nav.classList.remove("selected");
        })
    }
    else if (window.scrollY > 100) {
        backButton.classList.remove("scrolled");
    } else {
        backButton.classList.add("scrolled");
    }
}
