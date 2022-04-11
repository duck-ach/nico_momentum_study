const title = document.querySelector(".hello:first-child h1");
function handleTitleClick(){
    title.style.color = "pink";
}
function handleMouseEnter() {
    title.innerText = "Mouth is here!";
}
function handleMouseLeave(){
    title.innerText = "Mouth is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){

}
//title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);