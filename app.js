const title = document.querySelector(".hello:first-child h1");
function handleTitleClick(){
    title.style.color = "pink";
}
title.addEventListener("click", handleTitleClick);
