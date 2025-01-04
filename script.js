// Select the elements
const burgerMenu = document.querySelector('#burger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const navList = document.querySelector('.main-nav ul');
const menuItems = document.querySelectorAll('.main-nav li');  // Select menu items with submenus





// Toggle dropdown visibility on burger click
burgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show-dropdown');
});

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // Adjust based on your breakpoint
        // Ensure the dropdown is hidden when resizing to larger screens
        dropdownMenu.classList.remove('show-dropdown');
        navList.style.display = 'flex'; // Restore nav list for larger screens
    } else {
        // Adjust for smaller screens
        navList.style.display = 'none'; // Hide nav list for smaller screens
    }
});

// JavaScript is not required for hover functionality in this case, but we can add click-to-toggle for better mobile support if needed.

// Add hover functionality for larger screens
document.querySelectorAll('.menu-item').forEach(item => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
        // Add hover functionality
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) { // Only for larger screens
                submenu.classList.add('visible');
            }
        });

        item.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) { // Only for larger screens
                submenu.classList.remove('visible');
            }
        });
    }
});

document.querySelectorAll('.menu-item').forEach(item => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Only for smaller screens
                submenu.classList.toggle('visible');
            }
        });
    }
});
