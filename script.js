
// for hamburger icon to work
function toggleMenu(){
    const nav = document.getElementById("navLinks")
    const hamburger = document.getElementById("hamburger")

    nav.classList.toggle('active')

    if(nav.classList.contains('active')){
        hamburger.src = "img/cross-svgrepo-com.svg"; 
    }else{
        hamburger.src = "img/burger-menu-svgrepo-com.svg";
    }
}

// for contact button work

document.getElementById('contactBtn').addEventListener('click', function (){
    document.getElementById('contact').scrollIntoView({
        behavior:'smooth',
        block:'start'
    })
})