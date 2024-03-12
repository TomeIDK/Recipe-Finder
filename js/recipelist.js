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

  // Containers <div class="container"> and wrappers <div class="wrapper">
  let container = document.createElement("div");
  container.className = "container";
  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  // Title <h3 class="card__title">
  let title = document.createElement("h3");
  title.classList.add("card__title");
  title.innerHTML = dataTitle;

  // Time <small class="card__time">
  let time = document.createElement("small");
  time.classList.add("card__time");
  time.innerHTML = dataTime;

  // Summary <p class="card__summary">
  let summary = document.createElement("p");
  summary.classList.add("card__summary");
  summary.innerHTML = dataSummary;

  // Toggle <button class="card__toggle">
  let btnToggle = document.getElementById("btn-toggle-1").cloneNode(true);
  btnToggle.id = "btn-toggle-" + id;

  // Send above components to build the card
  let recipe = buildCard(
    wrapper,
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
            <div class="wrapper">
                <h3 class="card__title">Kip Curry</h3>
                <small class="card__time">45-60 minuten</small>
                <p class="card__summary">
                    Origineel recept.
                </p>
            </div>
            <button id="btn-toggle-1" class="card__toggle">
            Toon Recept
            </button>
        </div>
    </div>
</div>
*/
// Use all components to build the card and return as HTML component
function buildCard(
  wrapper,
  container,
  preview,
  card,
  title,
  time,
  summary,
  btnToggle,
  img
) {
  wrapper.appendChild(title);
  wrapper.appendChild(time);
  wrapper.appendChild(summary);
  container.appendChild(wrapper);
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
      });
    });
  });
}
