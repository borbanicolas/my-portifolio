const menuBtn = document.querySelector('[data-menu-btn]');
const menuList = document.querySelector('[data-menu-list]');
const bannerInfo = document.querySelector('[data-banner-info]')

menuBtn.addEventListener('click',() => {
    menuBtn.classList.toggle('open')
    menuList.classList.toggle('open-list')
    bannerInfo.classList.toggle('hide-info')
});

