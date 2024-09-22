const menuBtn = document.getElementById('burger');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active'); // Add or remove 'active' class
});
