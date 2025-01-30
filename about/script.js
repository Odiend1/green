
var scrollSections = [
    {
        id: "main",
        backgroundColor: "#fff",
        backgroundImage: null
    },
    {
        id: "global",
        backgroundColor: "#020204",
        backgroundImage: '../assets/images/starry-sky.jpg'

    }
]

function preloadImage(url)
{
    var img = new Image();
    img.src = url;
}
preloadImage(scrollSections[1].backgroundImage);

var subsectionElements = document.getElementsByClassName("subsection");
var currentBackgroundColor = scrollSections[0].backgroundColor;
var scrollOverlay = document.getElementById("scroll-overlay");
scrollOverlay.style.background = currentBackgroundColor;
window.scrollTo(0, 10);
scrollOverlay.scrollTo(0, 10);

function scrollEffects(event){
    for(let i = 0; i < subsectionElements.length; i++){
        subsectionElements[i].style.opacity = 0;
    }
    var currentSection = Math.floor((window.scrollY + window.innerHeight) / (2*window.innerHeight));
    let sinScrollValue = Math.sin(Math.PI * ((window.scrollY + window.innerHeight) % (2*window.innerHeight)) / (2*window.innerHeight));
    let cosScrollValue = Math.cos(Math.PI * ((window.scrollY + window.innerHeight) % (2*window.innerHeight)) / (2*window.innerHeight));
    subsectionElements[2 * currentSection].style.opacity = Math.pow(sinScrollValue, 1/3);
    subsectionElements[2 * currentSection + 1].style.opacity = Math.pow(sinScrollValue, 1/3);
    console.log(cosScrollValue)
    if(cosScrollValue < 0) {
        console.log(cosScrollValue)
        document.getElementById("scroll-overlay").style.background = `linear-gradient(${scrollSections[currentSection].backgroundColor}, ${100*(1+cosScrollValue)}%, ${scrollSections[currentSection+1].backgroundColor})`
        console.log(`linear-gradient(${scrollSections[currentSection].backgroundColor}}, ${1+cosScrollValue}, ${scrollSections[currentSection+1].backgroundColor})`);    }
    else if(cosScrollValue > 0) {
        currentBackgroundColor = scrollSections[currentSection].backgroundColor;
        if(scrollSections[currentSection].backgroundImage != null){
            scrollOverlay.style.background = `url(${scrollSections[currentSection].backgroundImage}) repeat`;
            scrollOverlay.style.backgroundSize = "1600px 900px";
        }
        else{
            scrollOverlay.style.background = scrollSections[currentSection].backgroundColor;
            scrollOverlay.style.backgroundSize = null;
        }
    }
}

window.addEventListener("wheel", scrollEffects);
scrollEffects();