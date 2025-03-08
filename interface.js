const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownButton = document.querySelector('.dropdown-button');

dropdownButton.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    dropdownContent.style.display = 'none';
});

dropdownContent.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
});

dropdownContent.addEventListener('mouseleave', () => {
    dropdownContent.style.display = 'none';
});