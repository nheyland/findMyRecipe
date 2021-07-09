let recipe = document.getElementsByClassName("recipe-instructions")[0];
let ingredients = document.getElementsByClassName("recipe-shopper-wrapper")[0];
if (recipe) {
  recipe.style.backgroundColor = "pink";
  recipe.style.border = " 1rem solid black";
  recipe.style.borderRadius = "1rem ";
  recipe.style.padding = "1rem ";
}
if (ingredients) {
  ingredients.style.backgroundColor = "pink";
  ingredients.style.border = " 1rem solid black";
  ingredients.style.borderRadius = "1rem ";
  ingredients.style.padding = "1rem ";
}
recipe && recipe.scrollIntoView();
