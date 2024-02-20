const DarkModeButton = document.getElementById('ColorMode');

DarkModeButton.addEventListener('click', () => {
    DarkModeButton.classList.toggle('activated');
    document.body.classList.toggle('dark');
});
