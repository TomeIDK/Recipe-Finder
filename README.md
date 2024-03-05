# Recipe-Finder
 Recipe library website containing recipes I use to cook daily. Search for any recipes using the search bar.

 ## Sources
 [Color Scheme & Fonts](https://chat.openai.com/share/92740be7-f7f8-4ba6-9ea4-129fd6a6d38f)
 [Alphabetical Sort](https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript)
 `  recipes.sort(function(a, b) {
    let keyA = a.title;
    let  keyB = b.title;

    // Compare the 2 titles
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;`