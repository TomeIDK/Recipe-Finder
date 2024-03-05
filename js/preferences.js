// Theme: False = Light Mode; True = Dark Mode
// Lang: False = Dutch; True = English
const themeToggler = document.getElementById("toggle-theme");
let preferences = {
  theme: false,
  lang: false,
};
loadPreferences();

themeToggler.addEventListener("change", () => {
  toggleTheme(themeToggler.checked);
  if (themeToggler.checked) {
    preferences.theme = true;
    localStorage.setItem("preferences", JSON.stringify(preferences));
  } else {
    preferences.theme = false;
    localStorage.setItem("preferences", JSON.stringify(preferences));
  }
});

function loadPreferences() {
  let { theme, lang } = JSON.parse(localStorage.getItem("preferences"));
  preferences = { theme, lang };
  themeToggler.checked = theme;
  
  toggleTheme(theme);
  toggleLang(lang);
}

function toggleTheme(theme) {
  if (theme) {
    document.documentElement.style.setProperty("--text", "#f5f5f5");
    document.documentElement.style.setProperty("--text-accent", "#bfbfbf");
    document.documentElement.style.setProperty("--bg", "#333333");
    console.log("Dark mode enabled");
  } else {
    document.documentElement.style.setProperty("--text", "#333333");
    document.documentElement.style.setProperty("--text-accent", "#666666");
    document.documentElement.style.setProperty("--bg", "#f5f5f5");
    console.log("Dark mode disabled");
  }
}

function toggleLang(lang) {}
