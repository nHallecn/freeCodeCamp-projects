const themes = [
    { name: "light", message: "Theme switched to Bright Light mode." },
    { name: "dark", message: "Theme switched to Classic Dark mode." },
    { name: "green", message: "Theme switched to soothing Forest Green." }
];

const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const statusMessageEl = document.getElementById("status-message");
const bodyEl = document.body;
const themeItems = themeDropdown.querySelectorAll("li[role='menuitem']");

const toggleDropdown = () => {
    const isExpanded = themeSwitcherButton.getAttribute("aria-expanded") === "true";
    
    if (isExpanded) {
        themeDropdown.setAttribute("hidden", "");
        themeSwitcherButton.setAttribute("aria-expanded", "false");
    } else {
        themeDropdown.removeAttribute("hidden");
        themeSwitcherButton.setAttribute("aria-expanded", "true");
    }
};

const switchTheme = (themeName) => {
    const selectedTheme = themes.find(t => t.name === themeName);
    
    if (selectedTheme) {
        themes.forEach(t => bodyEl.classList.remove(`theme-${t.name}`));
        

        bodyEl.classList.add(`theme-${selectedTheme.name}`);

        statusMessageEl.textContent = selectedTheme.message;

        themeDropdown.setAttribute("hidden", "");
        themeSwitcherButton.setAttribute("aria-expanded", "false");
    }
};

themeSwitcherButton.addEventListener("click", toggleDropdown);

themeItems.forEach(item => {
    item.addEventListener("click", (event) => {
        const themeId = event.target.id;
 
        const themeName = themeId.replace("theme-", ""); 
        switchTheme(themeName);
    });
});

