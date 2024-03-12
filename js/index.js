const btnRandom = document.getElementById("btn-random");

function loadScript(src, cb) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => cb(script);
  document.head.append(script);
}

// Load recipe list
loadScript("/js/recipelist.js", (script) => {
  console.log(`Script ${script.src} loaded.`);
  // Load recipe
  loadScript("/js/recipe.js", (script) => {
    console.log(`Script ${script.src} loaded.`);
  });
});
