function changeTextColor() {
    const colors = ['#000000', '#FF5733', '#3498db', '#2ecc71', '#9b59b6'];
    const currentColor = document.body.style.color;
    let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    document.body.style.color = nextColor;
}

function changeBackgroundColor() {
    const colors = ['#ffffff', '#ecf0f1', '#bdc3c7', '#34495e'];
    const currentColor = document.body.style.backgroundColor;
    let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    document.body.style.backgroundColor = nextColor;
}

function changeBackgroundImage() {
    const images = [
        'url("https://via.placeholder.com/1500x800/ff7f7f/333333?text=Background+1")',
        'url("https://via.placeholder.com/1500x800/7f7fff/333333?text=Background+2")',
        'url("https://via.placeholder.com/1500x800/7fff7f/333333?text=Background+3")'
    ];
    const currentImage = document.body.style.backgroundImage;
    let nextImage = images[(images.indexOf(currentImage) + 1) % images.length];
    document.body.style.backgroundImage = nextImage;
}
