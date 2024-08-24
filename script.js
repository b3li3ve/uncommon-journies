function handleResize() {
    const searchArea = document.querySelector('.search-area');
    const navList = document.querySelector('.main-nav');
    const burger = document.querySelector('#burger')
    const dropdownMenu = document.querySelector('.dropdown-menu') 
    const maxSearchWidth = 1024; // Adjust as needed
    const maxNavWidth = 768; // Adjust as needed

    // Log elements and window width for debugging
    console.log('Search Area:', searchArea);
    console.log('Nav List:', navList);
    console.log('Window Width:', window.innerWidth);

    if (window.innerWidth <= maxSearchWidth) {
        searchArea.classList.add('hide-search-area');
    } else {
        searchArea.classList.remove('hide-search-area');
    }

    if (window.innerWidth <= maxNavWidth) {
        navList.classList.add('hide-nav-list');
        burger.classList.remove('hide-burger');
    } else {
        navList.classList.remove('hide-nav-list');
        burger.classList.add('hide-burger')
        dropdownMenu.classList.add('hide-burger')
    }

    // Log class lists for debugging
    console.log('Search Area Classes:', searchArea.classList);
    console.log('Nav List Classes:', navList.classList);
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuBtn.addEventListener('click', () => {
        // Toggle the visibility of the dropdown menu
        dropdownMenu.classList.toggle('show-dropdown');
    });
});

