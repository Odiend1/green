
var categoryDiv = document.getElementById("menu-category-div");
var categoryLeftScrollButton = document.getElementById("category-scroll-left");
var categoryRightScrollButton = document.getElementById("category-scroll-right");

categoryLeftScrollButton.onclick = function(){
    categoryDiv.scrollTo({
        left: categoryDiv.scrollLeft - 500,
        behavior: "smooth"
      });
}

categoryRightScrollButton.onclick = function(){
    categoryDiv.scrollTo({
        left: categoryDiv.scrollLeft + 500,
        behavior: "smooth"
      });
}

import { menuItems } from "./menu-items.js";

for(let i = 0; i < menuItems.categories.length; i++){
  var category = menuItems.categories[i];
  var categoryContainer = document.getElementById(category.toLowerCase().replaceAll(" ", "-") + "-container");
  for(let j = 0; j < menuItems.items[category].length; j++){
    categoryContainer.innerHTML += `<div class="menu-item"><img src="/assets/images/menu-items/${menuItems.items[category][j].name.toLowerCase().replaceAll(" ", "-")}.png" class="menu-item-img" onerror="this.src='/assets/images/item-not-found.png'"><h3 class="menu-item-title">${menuItems.items[category][j].name}</h3><p class="menu-item-desc">$${menuItems.items[category][j].price}</p><button class="menu-item-add">ADD</button></div>`
  }
}