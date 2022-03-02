const mobileMenuBtn= document.getElementById('mobile-menu-btn');
const mobileMenu= document.getElementById('mobile-menu');

function toggleMenu(){
    console.log("hi");
    mobileMenu.classList.toggle('open');
}

mobileMenuBtn.addEventListener('click',toggleMenu);