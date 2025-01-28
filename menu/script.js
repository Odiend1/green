
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