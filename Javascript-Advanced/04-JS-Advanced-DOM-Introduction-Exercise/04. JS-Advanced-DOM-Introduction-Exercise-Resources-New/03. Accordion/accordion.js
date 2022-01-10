function toggle() {
    const button = document.querySelector('.button');
    const divText = document.getElementById('extra');

    button.textContent = button.textContent == 'More' ? 'Less' : 'More';

    divText.style.display == 'none' || divText.style.display == '' ? divText.style.display = 'block' : divText.style.display = 'none';
}