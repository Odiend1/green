
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

var menuCategoryAnchors = document.getElementsByClassName("menu-category");
var categoryTitles = document.getElementsByClassName("category-title");

Array.from(menuCategoryAnchors).forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var menuContainer = document.getElementById("menu-container");
document.addEventListener("wheel", function(event){
  console.log("E")
  for(let i = 0; i < categoryTitles.length; i++){
    if(categoryTitles[i].getBoundingClientRect().top - 200 < 0){
      menuCategoryAnchors[i].style.color = "#003e03";
      menuCategoryAnchors[i].style.fontWeight = "bold";
      menuCategoryAnchors[i].style.textDecoration = "underline";
      menuCategoryAnchors[i].style.textUnderlineOffset = "5px";
      for(let j = 0; j < categoryTitles.length; j++){
        if(j != i) {
          menuCategoryAnchors[j].style.color = "#000";
          menuCategoryAnchors[j].style.fontWeight = "none";
          menuCategoryAnchors[j].style.textDecoration = "none";
        }
      }
    }
  };
});

import { menuItems, getItemId } from "./menu-items.js";

for(let i = 0; i < menuItems.categories.length; i++){
  var category = menuItems.categories[i];
  var categoryContainer = document.getElementById(category.toLowerCase().replaceAll(" ", "-") + "-container");
  for(let j = 0; j < menuItems.items[category].length; j++){
    try{ categoryContainer.innerHTML += `<div class="menu-item"><img src="/assets/images/menu-items/${menuItems.items[category][j].name.toLowerCase().replaceAll(" ", "-")}.png" class="menu-item-img" onerror="this.src='/assets/images/item-not-found.png'"><h3 class="menu-item-title">${menuItems.items[category][j].name}</h3><p class="menu-item-desc">$${menuItems.items[category][j].price}</p><button class="menu-item-add" onclick="window.location.href = './item/?item=${getItemId(menuItems.items[category][j].name)}'">ADD</button></div>` } catch(e){}
  }
}