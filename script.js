var titleDiv = document.getElementById("title-div");
var title = document.getElementById("title");
var navBar = document.getElementById("nav-bar");
var titleDivHeight = window.innerHeight - navBar.clientHeight;

function resizeTitleDiv(){
    titleDiv.style.height = window.innerHeight - navBar.clientHeight + "px";
    titleDiv.style.marginTop = navBar.clientHeight + "px";
}

function resizeTitleDivFull(){
    titleDiv.style.height = window.innerHeight + "px";
    titleDiv.style.marginTop = 0;
}

resizeTitleDivFull();
window.addEventListener("resize", resizeTitleDivFull);

