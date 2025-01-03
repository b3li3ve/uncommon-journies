// Select the elements
const burgerMenu = document.querySelector('#burger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const navList = document.querySelector('.main-nav ul');
const menuItems = document.querySelectorAll('.main-nav li');  // Select menu items with submenus

// Function to handle burger menu toggle
burgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show-dropdown');
    navList.style.display = (navList.style.display === 'flex') ? 'none' : 'flex';  // Toggle nav list visibility
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

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});
