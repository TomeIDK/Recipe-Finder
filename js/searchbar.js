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