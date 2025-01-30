
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
function selectCategoryEffects(){
  for(let i = 0; i < categoryTitles.length; i++){
    if(categoryTitles[i].getBoundingClientRect().top - 200 < 0){
      menuCategoryAnchors[i].style.color = "#003e03";
      menuCategoryAnchors[i].style.fontWeight = "bold";
      menuCategoryAnchors[i].style.textDecoration = "underline";
      menuCategoryAnchors[i].style.textUnderlineOffset = "5px";
      menuCategoryAnchors[i].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      for(let j = 0; j < categoryTitles.length; j++){
        if(j != i) {
          menuCategoryAnchors[j].style.color = "#000";
          menuCategoryAnchors[j].style.fontWeight = "none";
          menuCategoryAnchors[j].style.textDecoration = "none";
        }
      }
    }
  };
}

Array.from(menuCategoryAnchors).forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
      setTimeout(selectCategoryEffects, 800);
  })
});

var menuContainer = document.getElementById("menu-container");

document.addEventListener("wheel", function(event){
  selectCategoryEffects();
});

import { menuItems, getItemId } from "./menu-items.js";

for(let i = 0; i < menuItems.categories.length; i++){
  var category = menuItems.categories[i];
  var categoryContainer = document.getElementById(category.toLowerCase().replaceAll(" ", "-") + "-container");
  for(let j = 0; j < menuItems.items[category].length; j++){
    categoryContainer.innerHTML += `<div class="menu-item"><img src="../assets/images/menu-items/${menuItems.items[category][j].name.toLowerCase().replaceAll(" ", "-")}.png" class="menu-item-img" onerror="this.src='../assets/images/item-not-found.png'"><h3 class="menu-item-title">${menuItems.items[category][j].name}</h3><p class="menu-item-desc">$${menuItems.items[category][j].price}</p><button class="menu-item-add" onclick="window.location.href = './item/?item=${getItemId(menuItems.items[category][j].name)}'">ADD</button></div>`;
  }
}

var menuItemElements = document.getElementsByClassName("menu-item");
var menuItemTitles = document.getElementsByClassName("menu-item-title");
var menuItemDescriptions = document.getElementsByClassName("menu-item-desc");
var menuItemAddButtons = document.getElementsByClassName("menu-item-add");

function resizeMenuElements(){
  if(window.innerWidth < 650){
    for(let i = 0; i < menuItemElements.length; i++){
      let menuItem = menuItemElements[i];
      let menuItemTitle = menuItemTitles[i]; 
      let menuItemDesc = menuItemDescriptions[i];
      let menuItemAdd = menuItemAddButtons[i];

      menuItem.style.width = "150px";
      menuItem.style.height = "175px";
      menuItemTitle.style.fontSize = "0.75em";
      menuItemTitle.style.padding = "10px 20px 0px";
      menuItemDesc.style.fontSize = "0.5em";
      menuItemAdd.style.right = "7.5px";
      menuItemAdd.style.bottom = "7.5px";
      menuItemAdd.style.height = "25px";
      menuItemAdd.style.width = "40px";
      menuItemAdd.style.fontSize = "0.45em";
    }
  }
  else{
    for(let i = 0; i < menuItemElements.length; i++){
      let menuItem = menuItemElements[i];
      let menuItemTitle = menuItemTitles[i]; 
      let menuItemDesc = menuItemDescriptions[i];
      let menuItemAdd = menuItemAddButtons[i];

      menuItem.style.width = "300px";
      menuItem.style.height = "350px";
      menuItemTitle.style.fontSize = "1.5em";
      menuItemTitle.style.padding = "20px 20px 0px";
      menuItemDesc.style.fontSize = "1em";
      menuItemAdd.style.right = "15px";
      menuItemAdd.style.bottom = "15px";
      menuItemAdd.style.height = "50px";
      menuItemAdd.style.width = "70px";
      menuItemAdd.style.fontSize = "0.9em";
    }
  }
}

resizeMenuElements();
window.addEventListener("resize", function(){
  resizeMenuElements();
})