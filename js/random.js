const optionsTitle = document.getElementById("options-title");
const optionsImg = document.getElementById("options-img");
const optionsTime = document.getElementById("options-time");
const optionsSummary = document.getElementById("options-summary");

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomRecipe(recipes) {
    let id = getRandomNumber(recipes.length);
    console.log(id);
    recipes.forEach(recipe => {
        if (recipe.id == id ) {
            console.log(recipe.id);
            buildRandom(recipe);
        }
    });
    return -1;
}

function buildRandom(recipe) {
    console.log(recipe);
    optionsTitle.innerText = recipe.title;
    optionsImg.src = recipe.img;
    optionsTime.innerText = recipe.time;
    optionsSummary.innerHTML = recipe.summary;
}