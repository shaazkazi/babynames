// Theme toggle functionality
function initThemeToggle() {
    function showLoader() {
        const loader = document.getElementById('loader')
        loader.style.display = 'flex'
    }

    function hideLoader() {
        const loader = document.getElementById('loader')
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }

    // Show loader immediately
    showLoader()

    // Hide loader when content is loaded
    window.addEventListener('load', () => {
        hideLoader()
    })
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('i');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const mobileThemeIcon = mobileThemeToggle?.querySelector('i');

    function updateThemeIcons(theme) {
        const iconClass = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        if (themeIcon) themeIcon.className = iconClass;
        if (mobileThemeIcon) mobileThemeIcon.className = iconClass;
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcons(theme);
    }

    // Set dark as default theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', initThemeToggle);
