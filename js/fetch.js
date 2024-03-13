// Returns promise with alphabetically sorted array of data from "recipes.json"
function getRecipes() {
  return sortData(getData("/data/recipes.json"));
}

// Fetch JSON data
async function getData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.recipes;
  } else {
    console.log(`HTTP-Error: ${response.status}`);
  }
}

// Sort data alphabetically
function sortData(promise) {
  promise.then((result) => {
    result.sort(function (a, b) {
      let keyA = a.title;
      let keyB = b.title;

      // Compare the 2 titles
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  });
  return promise;
}
