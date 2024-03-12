const cardRecipe = document.getElementById("recipe");

loadScript("/js/fetch.js", (script) => {
  console.log(`Script ${script.src} loaded.`);
});

function buildRecipeCard(currentRecipe) {
    //Recipe title
    const recipeTitle = cardRecipe.querySelector(".recipe__title");
    recipeTitle.innerHTML = currentRecipe.title;

    //Recipe ingredients
    const recipeIngredientsList = cardRecipe.querySelector(
      ".card__ingredients-list"
    );
    const recipeIngredient = document.createElement("li");

    recipeIngredientsList.innerHTML = "";
    recipeIngredient.classList.add("ingredient");

    for (let i = 0; i < currentRecipe.ingredients.length; i++) {
      recipeIngredient.innerHTML = currentRecipe.ingredients[i];
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

    for (let i = 0; i < currentRecipe.instructions.length; i++) {
      recipeInstructionNumber.innerHTML = `Stap ${i + 1}`;
      recipeInstructionItem.appendChild(recipeInstructionNumber);

      recipeInstruction.innerHTML = currentRecipe.instructions[i];
      recipeInstructionItem.appendChild(recipeInstruction);

      recipeInstructionsList.appendChild(recipeInstructionItem.cloneNode(true));
    }
}
