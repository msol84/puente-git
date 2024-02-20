const DarkModeButton = document.getElementById('ColorMode');

DarkModeButton.addEventListener('click', () => {
    DarkModeButton.classList.toggle('active');
    document.body.classList.toggle('dark');
});
