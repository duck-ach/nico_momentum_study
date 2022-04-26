const images = ["0.PNG", "1.PNG", "2.PNG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;
console.log(bgimage)

document.body.appendChild(bgimage);