export default function navbar() {
    // get the current link from the url, and set it to the active link
    const url = window.location.pathname;
    const activeLink = url.substring(url.lastIndexOf('/') + 1);
    if (activeLink === '') {
        window.location.href = '/index.html';
    }
    const navbar = document.querySelector("nav");
    const links = navbar.querySelectorAll("a");
    function setupSmallNav() {
        console.log(links)
        const link = [...links].filter(link => link.getAttribute("href") === activeLink)[0];
        console.log(link);
        if (link.getAttribute("href") === activeLink) {
            // disable the transition animation
            link.style.transition = "none";
            link.classList.add("current");
            window.setTimeout(() => {
                link.style.transition = "";
            }, 0);
            // make scroll behavior not smooth
            if (navbar.scrollHeight > navbar.clientHeight) {
                link.scrollIntoView(true, {
                    behavior: "auto"
                });
                navbar.scrollBy(0, -5);
                console.log("scroll");
            }
            link.textContent = link.textContent;
            // when the link is clicked or hovered expand the navbar
            link.addEventListener("click", e => {
                console.log(link.href);
                e.preventDefault();
                if (navbar.classList.contains("expanded")) {
                    navbar.classList.remove("expanded");
                    navbar.style.transitionDuration = "0s";
                    navbar.style.overflowY = "";
                    window.setTimeout(() => {
                        navbar.style.maxHeight = "";
                        link.scrollIntoView(true, {
                            behavior: "auto"
                        });
                        navbar.scrollBy(0, -5);
                        navbar.style.transitionDuration = "";
                    }, 0);
                    return;
                }
                navbar.classList.add("expanded");
                navbar.style.maxHeight = `min(${navbar.scrollHeight}px, 80vh)`;
                window.setTimeout(() => {
                    navbar.style.overflowY = "auto";
                }, parseFloat(window.getComputedStyle(navbar).transitionDuration)*1000);
            });

        }
    }
    setupSmallNav();
    document.addEventListener("resize", () => {
        setupSmallNav();
    });
}