const themes = ['light', 'dark'];

export default function setTheme() {
    let theme = localStorage.getItem('theme');
    // check if theme is set in localStorage
    if (theme === null) {
        // set default theme based on preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQuery.matches) {
            theme = 'dark';
        } else {
            theme = 'light';
        }
        // add listener to change theme on preference change
        mediaQuery.addEventListener('change', e => {
            if (e.matches) {
                theme = 'dark';
            } else {
                theme = 'light';
            }
            document.querySelectorAll('.change-theme').forEach(el => {
                const currentTheme = theme;
                const nextTheme = mediaQuery.matches ? "light": "dark";
                el.textContent = "Change To " + nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1);
                document.documentElement.classList.replace(nextTheme, currentTheme);
            });
        });

        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.classList.add(theme);
    document.querySelectorAll('.change-theme').forEach(el => {
        const currentTheme = themes.indexOf(theme);
        const nextTheme = (currentTheme + 1) % themes.length;
        el.textContent = "Change To " + themes[nextTheme].charAt(0).toUpperCase() + themes[nextTheme].slice(1);
        el.addEventListener('click', () => {
            // rotate through themes
            const currentTheme = themes.indexOf(theme);
            const nextTheme = (currentTheme + 1) % themes.length;
            document.documentElement.classList.replace(theme, themes[nextTheme]);
            localStorage.setItem('theme', themes[nextTheme]);
            theme = themes[nextTheme];
            const nextNextTheme = (nextTheme + 1) % themes.length;
            document.querySelectorAll('.change-theme').forEach(el => {
                el.textContent = "Change To " + themes[nextNextTheme].charAt(0).toUpperCase() + themes[nextNextTheme].slice(1);
            });
        });
    })
}