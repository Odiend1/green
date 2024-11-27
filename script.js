var titleDiv = document.getElementById("title-div");
var title = document.getElementById("title");
var navBar = document.getElementById("nav-bar");
var navLinks = document.getElementsByClassName("nav-link");
var navLinkContainer = document.getElementById("nav-link-container");
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

var lightNavLinkColor = true;
addEventListener("scroll", function(){
    if(window.scrollY > titleDiv.clientHeight-30 && lightNavLinkColor){
        lightNavLinkColor = false;
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].style.color = "#000";
        }
        navBar.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        navBar.style.backdropFilter = "blur(5px)";
    }
    else if(window.scrollY < titleDiv.clientHeight-30 && !lightNavLinkColor){
        lightNavLinkColor = true;
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].style.color = "#fff";
        }
        navBar.style.backgroundColor = "transparent";
        navBar.style.backdropFilter = "none";
    }
})