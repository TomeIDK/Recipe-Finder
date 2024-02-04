//TODO:
//1: Modal functionality

const cards = document.getElementById("cards");
const cardToggle = document.getElementsByClassName("card__toggle");
const cardRecipe = document.getElementById("recipe");
const modal = document.getElementById("modal");
const close = document.getElementsByClassName("close")[0];
let recipeList = getRecipes();

//Generate and append cards from json file
recipeList.then((recipeList) => {
  let recipes = recipeList.recipes;
  recipes.sort(function(a, b) {
    let keyA = a.title;
    let  keyB = b.title;

    // Compare the 2 titles
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  //Generate all cards and collect them in cardList array
  let cardList = [];
  for (let i = 0; i < recipes.length; i++) {
    cardList.push(
      generateCard(
        cardList.length,
        recipes[i].img,
        recipes[i].title,
        recipes[i].time,
        recipes[i].summary
      )
    );
  }

  //Clear original card
  cards.innerHTML = "";

  //Display all cards
  cardList.forEach((card) => {
    cards.appendChild(card);
  });
});

//Toggle button functionality
recipeList.then((recipeList) => {
  for (btn of cardToggle) {
    //Get id of current recipe
    let id = btn.id.slice(btn.id.length - 1);

    //Get current recipe from data
    const currentCard = document.querySelector(`#card-${id}`);
    let currentCardTitle = currentCard.querySelector(".card__title").innerHTML;
    let recipe;
    for (let i = 0; i < recipeList.recipes.length; i++) {
      if (recipeList.recipes[i].title == currentCardTitle) {
        recipe = recipeList.recipes[i];
      }
    }
    btn.addEventListener("click", function () {
      buildRecipeCard(id, recipe);
    });
  }
});

//Fetch data from file
async function getRecipes() {
  const response = await fetch("/data/recipes.json");
  const data = await response.json();
  return data;
}

function buildRecipeCard(cardId, recipe) {
  //Recipe title
  const recipeTitle = cardRecipe.querySelector(".recipe__title");
  recipeTitle.innerHTML = recipe.title;

  //Recipe ingredients
  const recipeIngredientsList = cardRecipe.querySelector(
    ".card__ingredients-list"
  );
  const recipeIngredient = document.createElement("li");

  recipeIngredientsList.innerHTML = "";
  recipeIngredient.classList.add("ingredient");

  for (let i = 0; i < recipe.ingredients.length; i++) {
    recipeIngredient.innerHTML = recipe.ingredients[i];
    recipeIngredientsList.appendChild(recipeIngredient.cloneNode(true));
  }

  //Recipe instructions
  const recipeInstructionsList = cardRecipe.querySelector(
    ".card__instruction-list"
  );
  const recipeInstructionItem = document.createElement("li");
  const recipeInstructionNumber = document.createElement("span");
  const recipeInstruction = document.createElement("p");

  recipeInstructionsList.innerHTML = "";
  recipeInstructionItem.classList.add("instruction-list__item");
  recipeInstructionNumber.classList.add("item-number");
  recipeInstruction.classList.add("instruction");

  for (let i = 0; i < recipe.instructions.length; i++) {
    recipeInstructionNumber.innerHTML = `Stap ${i + 1}`;
    recipeInstructionItem.appendChild(recipeInstructionNumber);

    recipeInstruction.innerHTML = recipe.instructions[i];
    recipeInstructionItem.appendChild(recipeInstruction);

    recipeInstructionsList.appendChild(recipeInstructionItem.cloneNode(true));
  }
}

//Generate card
function generateCard(id, dataImg, dataTitle, dataTime, dataSummary) {
  //Card
  let recipe = document.createElement("div");
  recipe.classList.add("card");
  recipe.id = "card-" + (id + 1);

  //Card Preview
  let preview = document.createElement("div");
  preview.classList.add("card__preview");

  //Img
  let img = document.createElement("img");
  img.classList.add("card__img");
  img.setAttribute("src", dataImg);
  img.setAttribute("alt", "");
  img.setAttribute("width", "250px");

  //Containers and wrappers
  let container = document.createElement("div");
  container.className = "container";
  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  //Title
  let title = document.createElement("h3");
  title.classList.add("card__title");
  title.innerHTML = dataTitle;

  //Time
  let time = document.createElement("small");
  time.classList.add("card__time");
  time.innerHTML = dataTime;

  //Summary
  let summary = document.createElement("p");
  summary.classList.add("card__summary");
  summary.innerHTML = dataSummary;

  //Toggle
  let btnToggle = document.getElementById("btn-toggle-1").cloneNode(true);
  btnToggle.id = "btn-toggle-" + (id + 1);

  //Card builder
  let card = buildCard(
    wrapper,
    container,
    preview,
    recipe,
    title,
    time,
    summary,
    btnToggle,
    img
  );
  return card;
}

//Build card
function buildCard(
  wrapper,
  container,
  preview,
  recipe,
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
  recipe.appendChild(preview);

  return recipe;
}

//Search bar functionality
function search() {
  const searchBar = document.getElementById("rsearch");
  let filter = searchBar.value.toUpperCase();
  const div = cards.getElementsByClassName("card");
  let divTitle;
  let text;

  for (let i = 0; i < div.length; i++) {
    divTitle = div[i].getElementsByClassName("card__title")[0];
    text = divTitle.textContent || divTitle.innerText;
    if (text.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
