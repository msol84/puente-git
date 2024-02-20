const NavTabs = document.querySelectorAll('.topNav > menu > li > a');
const PathPage = window.location.pathname.split('/').pop();

NavTabs.forEach((tab) => {
    if (
        PathPage.includes(tab.textContent.toLowerCase()) ||
        (PathPage.includes('index') && tab.textContent.toLowerCase() === 'home')
    ) {
        tab.classList.add('selected');
    }
});
