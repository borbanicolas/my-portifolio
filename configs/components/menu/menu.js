const menuBtn = document.querySelector('[data-menu-btn]');
const menuList = document.querySelector('[data-menu-list]');
const bannerInfo = document.querySelector('[data-banner-info]')
const tooBarIcons = document.querySelector('[data-too-bar-icon]')

menuBtn.addEventListener('click',() => {
    menuBtn.classList.toggle('open')
    menuList.classList.toggle('open-list')
    bannerInfo.classList.toggle('hide-info')
    tooBarIcons.classList.toggle('hide-icon-too-bar')
    
});

