const bckImage = document.querySelector("body");

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];


const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.alt = 'background images';
bgImage.classList.add("bgImage");
bckImage.prepend(bgImage);

