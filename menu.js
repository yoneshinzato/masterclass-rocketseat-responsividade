let show = true //mostrando menu normal

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
    menuSection.classList.toggle('on', show)
    show = !show //garantir que nao vai bugar
})