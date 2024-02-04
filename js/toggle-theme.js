const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.checked = false;

toggleTheme.addEventListener("change", () => {
  if (toggleTheme.checked) {
    console.log("Dark mode enabled");
    document.documentElement.style.setProperty("--text", "#f5f5f5");
    document.documentElement.style.setProperty("--text-accent", "#bfbfbf");
    document.documentElement.style.setProperty("--bg", "#333333");
  } else {
    console.log("Dark mode disabled");
    document.documentElement.style.setProperty("--text", "#333333");
    document.documentElement.style.setProperty("--text-accent", "#666666");
    document.documentElement.style.setProperty("--bg", "#f5f5f5");
  }
});
