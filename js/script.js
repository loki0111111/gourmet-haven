const mobileNav = document.getElementById('mobile-nav')
const closeMobileNav = document.getElementById('close-m-nav')
const desktopNav = document.getElementById('open-nav')

closeMobileNav.addEventListener('click', () => {
    mobileNav.style.display = 'none'
})


desktopNav.addEventListener('click', () => {
    mobileNav.style.display = 'block'
})


function hideNav() {
    mobileNav.addEventListener('click', () => {
        mobileNav.style.display = 'none'
    })
}