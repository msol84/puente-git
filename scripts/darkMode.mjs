document.addEventListener('DOMContentLoaded', () => {
    const DarkModeButton = document.getElementById('ColorMode');
    const Root = document.querySelector(':root');
    const ColorMode = localStorage.getItem('color-mode');

    if (ColorMode === 'dark') {
        Root.classList.add('dark');
        DarkModeButton.classList.add('activated');
        DarkModeButton.textContent = 'Dark Mode';
    }

    DarkModeButton.addEventListener('click', () => {
        DarkModeButton.classList.toggle('activated');
        Root.classList.toggle('dark');
        if (Root.classList.contains('dark')) {
            DarkModeButton.textContent = 'Dark Mode';
        } else {
            DarkModeButton.textContent = 'Light Mode';
        }
        if (Root.classList.contains('dark')) {
            localStorage.setItem('color-mode', 'dark');
        } else {
            localStorage.setItem('color-mode', '');
        }
    });
});
