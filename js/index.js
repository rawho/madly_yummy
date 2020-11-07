navBar = document.querySelectorAll(".nav-item")

console.log(navBar)


navBar.forEach(i => {
    i.addEventListener('click', (a) => {
        active = document.querySelector(".active")
        active.classList.remove("active")
        i.classList.add('active')
    })
});
