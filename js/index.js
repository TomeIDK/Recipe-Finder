const btnRandom = document.getElementById("btn-random");

// Load fetch.js
loadScript("/js/fetch.js", (script) => {
  console.log(`Script ${script.src} loaded.`);
})

// Load recipelist.js
loadScript("/js/recipelist.js", (script) => {
  console.log(`Script ${script.src} loaded.`);
  // Load recipe.js
  loadScript("/js/recipe.js", (script) => {
    console.log(`Script ${script.src} loaded.`);
  });
});

// Load random.js
loadScript("/js/random.js", (script) => {
  console.log(`Script ${script.src} loaded.`);
});

btnRandom.addEventListener("click", () => {
  let promise = getRecipes();
  promise.then((recipes) => {
    getRandomRecipe(recipes);
  })
});

function loadScript(src, cb) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => cb(script);
  document.head.append(script);
}
