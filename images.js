function changeImg() {
    var image = document.getElementById('photo');
    image.src = 'img/me1.jpg'; // Replace 'new_image.jpg' with the path of the new image
}

var imageArray = [
    'img/me.jpg',
    'img/me1.jpg',
    'img/me2.jpg',
    'img/me3.jpg'
]

var currentIndex = 0;

function changeImgLoop() {
    var image = document.getElementById('photo');
    currentIndex = (currentIndex + 2) % imageArray.length;
    image.src = imageArray[currentIndex];
}

function Forward() {
    var image = document.getElementById('photo');
    currentIndex = (currentIndex + 1) % imageArray.length;
    image.src = imageArray[currentIndex];
}


function Backward() {
    var image = document.getElementById('photo');
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    image.src = imageArray[currentIndex];
}