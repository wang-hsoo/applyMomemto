const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);


document.body.style.backgroundImage = ` linear-gradient(rgba(0,0,0,0.3),  rgba(0, 0, 0, 0.3) ), url(img/${chosenImage})`;