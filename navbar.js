const openNavbarBtn = document.querySelector("#open-btn");
const closeNavbarBtn = document.querySelector("#close-btn");

const navbarItemContainer = document.querySelector("#nav-items-container");

openNavbarBtn.addEventListener("click", () => {
    console.log("Working");
    openNavbarBtn.classList.toggle("d-block")
    openNavbarBtn.classList.toggle("d-none")
    closeNavbarBtn.classList.remove("d-none")
    closeNavbarBtn.classList.add("d-block")
    //Showing Navbar Links
    navbarItemContainer.classList.add("d-flex")
})

closeNavbarBtn.addEventListener("click", () => {
    console.log("Working");
    closeNavbarBtn.classList.toggle("d-block")
    closeNavbarBtn.classList.toggle("d-none")
    openNavbarBtn.classList.remove("d-none")
    openNavbarBtn.classList.add("d-block");
    //Hiding Navbar Links
    navbarItemContainer.classList.remove("d-flex")

})

