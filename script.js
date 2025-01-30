// var titleDiv = document.getElementById("title-div");
var title = document.getElementById("title");
var orderButton = document.getElementById("order-button-img");
// var navBar = document.getElementById("nav-bar");
// var navLinks = document.getElementsByClassName("nav-link");
// var navLinkContainer = document.getElementById("nav-link-container");
// var titleDivHeight = window.innerHeight - navBar.clientHeight;

function resizeElements(){
    if(window.innerWidth < 1000){
        title.style.width = "85%";
        orderButton.style.width = "50%";
    }
    else{
        title.style.width = "50%";
        orderButton.style.width = "20%";
    }

    if(window.innerWidth < 500){
        title.style.paddingTop = "20%";
    }
    else{
        title.style.paddingTop = "0";
    }
}

resizeElements();
window.addEventListener("resize", function(event){
    console.log(window.innerWidth);
    resizeElements();
});

// try{
//     var backgroundVideo = document.getElementById("background-video");
//     var slideshowVideos = ["sandwich", "salad", "pasta"];
//     var slideshowIndex = 0;
//     setInterval(function(){
//         backgroundVideo.src = "./assets/videos/title-slideshow/gp-" + slideshowVideos[slideshowIndex] + ".mp4";
//         slideshowIndex++;
//         if(slideshowIndex > 2) slideshowIndex = 0;
//     }, 5500)
//     }
// catch(e){}


// function resizeTitleDiv(){
//     titleDiv.style.height = window.innerHeight - navBar.clientHeight + "px";
//     titleDiv.style.marginTop = navBar.clientHeight + "px";
// }

// var lightNavLinkColor = true;
// addEventListener("scroll", function(){
//     if(window.scrollY > titleDiv.clientHeight-30 && lightNavLinkColor){
//         lightNavLinkColor = false;
//         for(let i = 0; i < navLinks.length; i++){
//             navLinks[i].style.color = "#000";
//         }
//         navBar.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
//         navBar.style.backdropFilter = "blur(5px)";
//         navBar.setAttribute("style","-webkit-filter:blur(5px)");
//     }
//     else if(window.scrollY < titleDiv.clientHeight-30 && !lightNavLinkColor){
//         lightNavLinkColor = true;
//         for(let i = 0; i < navLinks.length; i++){
//             navLinks[i].style.color = "#fff";
//         }
//         navBar.style.backgroundColor = "transparent";
//         navBar.style.backdropFilter = "none";
//         navBar.setAttribute("style","-webkit-filter:none");
//     }
// })

