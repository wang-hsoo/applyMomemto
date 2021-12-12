const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

//배열길이 만큼에 숫자를 랜덤으로 선택한 다음 floor(버림)를 통해 랜덤한 정수를 나오게 한다
const chosenImage = images[Math.floor(Math.random() * images.length)];

//해당 숫자에 이미지를 배경으로 추가해준다
document.body.style.backgroundImage = ` linear-gradient(rgba(0,0,0,0.3),  rgba(0, 0, 0, 0.3) ), url(img/${chosenImage})`;