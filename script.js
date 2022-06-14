//NAVBAR
const navLinks = document.querySelectorAll(".nav-link");

function NavBarHandler (){
    navLinks.forEach(link => {
        link.classList.remove("selected");
    });
    this.classList.add("selected");
}

navLinks.forEach(link => {
    link.addEventListener("click", NavBarHandler)
});