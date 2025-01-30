var navLinks = document.getElementsByClassName("nav-link");
var menuButton = document.getElementById("menu-button");

function showNav(){
    if(window.innerWidth < 500){
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].hidden = true;
        }
        menuButton.hidden = false;
    }
    else{
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].hidden = false;
        }
        menuButton.hidden = true;
    }
}

showNav();

window.addEventListener("resize", function(event){
    showNav();
})

menuButton.onclick = function(){
    if(document.getElementById('nav-menu').hidden){
        document.getElementById('nav-menu').hidden = false;
        menuButton.innerHTML = '&times;';
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
    else{
        document.getElementById('nav-menu').hidden = true;
        menuButton.innerHTML = '☰';
        document.getElementsByTagName("html")[0].style.overflow = "auto";

    }
}