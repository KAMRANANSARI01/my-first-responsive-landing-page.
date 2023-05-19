const mobile_burger = document.querySelector(".burger-icon");
const mobile_header = document.querySelector(".header");

 const toggleNav = () => {
    mobile_header.classList.toggle("active");
 }

mobile_burger.addEventListener('click',toggleNav)
