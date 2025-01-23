const imageContainer = document.querySelector('.image-container');

const btn = document.querySelector('.btn');

btn.addEventListener('click',(event) => {
    addNewImages()
});

function addNewImages() {
    const newImage = document.createElement('img');
    newImage.src = `https://picsum.photos/300?random=1${Math.floor(Math.random() * 1000) + 1000}/`;
    imageContainer.appendChild(newImage);
}