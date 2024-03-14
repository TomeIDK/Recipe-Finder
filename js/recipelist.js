const cards = document.getElementById("cards");

// Load fetch script
loadScript("/js/fetch.js", (script) => {
  console.log(`Script ${script.src} loaded.`);
  buildRecipeList();
});

// Build Recipe List
function buildRecipeList() {
  // Fetch JSON Data
  let recipes = getRecipes();

  recipes.then((recipeList) => {
    let cardsList = [];
    recipeList.forEach((item) => {
      cardsList.push(
        generateCard(item.id, item.img, item.title, item.time, item.summary)
      );
    });

    // Clear default card
    cards.innerHTML = "";

    // Append cards to HTML Section
    cardsList.forEach((card) => {
      cards.append(card);
    });

    // Add Event Listener to each button
    addEventListeners(recipes);
  });
}

// Generate card
function generateCard(id, dataImg, dataTitle, dataTime, dataSummary) {
  // Card <div class="card">
  let card = document.createElement("div");
  card.classList.add("card");
  card.id = "card-" + id;

  // Card Preview <div class="card__preview">
  let preview = document.createElement("div");
  preview.classList.add("card__preview");

  // Img <img class="card__img">
  let img = document.createElement("img");
  img.classList.add("card__img");
  img.setAttribute("src", dataImg);
  img.setAttribute("alt", "");
  img.setAttribute("width", "250px");

  // Containers <div class="container">
  let container = document.createElement("div");
  container.className = "container";

  // Title <h3 class="card__title">
  let title = document.createElement("h3");
  title.classList.add("card__title");
  title.classList.add("fs-xl");
  title.classList.add("montserrat");
  title.classList.add("semibold");
  title.innerHTML = dataTitle;

  // Time <small class="card__time">
  let time = document.createElement("small");
  time.classList.add("card__time");
  time.classList.add("fs-xs");
  time.classList.add("oswald");
  time.classList.add("medium");
  time.innerHTML = dataTime;

  // Summary <p class="card__summary">
  let summary = document.createElement("p");
  summary.classList.add("card__summary");
  summary.classList.add("opensans");
  summary.classList.add("regular");
  summary.innerHTML = dataSummary;

  // Toggle <button class="card__toggle">
  let btnToggle = document.getElementById("btn-toggle-1").cloneNode(true);
  btnToggle.id = "btn-toggle-" + id;

  // Send above components to build the card
  let recipe = buildCard(
    container,
    preview,
    card,
    title,
    time,
    summary,
    btnToggle,
    img
  );
  return recipe;
}

// HTMl Card Template:
/*
<div id="card-1" class="card">
    <div class="card__preview">
        <img
            src="/images/chickencurry.jpg"
            alt=""
            width="250px"
            class="card__img"
        />
        <div class="container">
                <h3 class="card__title">Kip Curry</h3>
                <small class="card__time">45-60 minuten</small>
                <p class="card__summary">
                    Origineel recept.
                </p>
            <button id="btn-toggle-1" class="card__toggle">
            Toon Recept
            </button>
        </div>
    </div>
</div>
*/
// Use all components to build the card and return as HTML component
function buildCard(
  container,
  preview,
  card,
  title,
  time,
  summary,
  btnToggle,
  img
) {
  container.appendChild(title);
  container.appendChild(time);
  container.appendChild(summary);
  container.appendChild(btnToggle);
  preview.appendChild(img);
  preview.appendChild(container);
  card.appendChild(preview);

  return card;
}

function addEventListeners(promise) {
  promise.then((recipes) => {
    recipes.forEach((recipe) => {
      console.log(length);
      const btn = document.getElementById(`btn-toggle-${recipe.id}`);
      btn.addEventListener("click", () => {
        buildRecipeCard(recipe);
        sectionRecipeList.classList.toggle("hidden");
        sectionRecipeList.classList.toggle("visible-flex");
        sectionRecipe.classList.toggle("hidden");
        sectionRecipe.classList.toggle("visible");
        console.log("fired");
      });
    });
    console.log("Loaded");
  });
}
