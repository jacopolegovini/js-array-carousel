// ** Carousel
// Prendiamo gli elementi dal DOM
const carouselElement = document.querySelector('.carousel-photo');
const arrowLeftElement = document.querySelector('.fa-arrow-left');
const arrowRightElement = document.querySelector('.fa-arrow-right');
const thumbnailsElement = document.querySelector('.thumbnails-photo');
const thumbnailsMdElement = document.querySelector('.thumbnails-photo-md')


// Creazione variabili
const imgs = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
let htmlElement = '';

const thumbnails = [...imgs]
let htmlThumbElement = '';

const thumbnailsMd = ['', '', '', '', '',];
let htmlThumbMdElement = '';


// Costruzione dinamica della stringa nel DOM - Carousel
for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    htmlElement += `<img src="${img}" alt="img-${i + 1}">`
}
carouselElement.innerHTML = htmlElement;

// Costruzione dinamica della stringa nel DOM - Thumnails
for (let i = 0; i < thumbnails.length; i++) {
    const thumbnail = thumbnails[i];
    htmlThumbElement += `<img src="${thumbnail}" alt="img-${i + 1}">`
}
thumbnailsElement.innerHTML = htmlThumbElement;

// Costruzione dinamica della stringa nel DOM - Thumnails-md
for (let i = 0; i < thumbnailsMd.length; i++) {
    htmlThumbMdElement += `<div class="thumbnails-photo-md-element"></div>`;
    thumbnailsMdElement.innerHTML = htmlThumbMdElement;
}


// Prendiamo gli elementi del DOM creati col ciclo for
const imgElement = document.querySelectorAll('.carousel-photo img');
const thumbElement = document.querySelectorAll('.thumbnails-photo img');
const thumbMdElement = document.querySelectorAll('.thumbnails-photo-md-element');


// Rendiamo visibile la prima img
let currentIndex = 0;
imgElement[currentIndex].classList.add('active');
thumbElement[currentIndex].classList.add('focus');
thumbMdElement[currentIndex].classList.add('focus-md');


// Arrow left & right
arrowRightElement.addEventListener('click', function(){
    
    imgElement[currentIndex].classList.remove('active');
    thumbElement[currentIndex].classList.remove('focus');
    thumbMdElement[currentIndex].classList.remove('focus-md');

    
    currentIndex ++;

    // Loop
    if (currentIndex === imgs.length) {
        currentIndex = 0;
    } 

    imgElement[currentIndex].classList.add('active');
    thumbElement[currentIndex].classList.add('focus');
    thumbMdElement[currentIndex].classList.add('focus-md');

})

arrowLeftElement.addEventListener('click', function(){
    
    imgElement[currentIndex].classList.remove('active');
    thumbElement[currentIndex].classList.remove('focus');
    thumbMdElement[currentIndex].classList.remove('focus-md');
    
    currentIndex --;

    // Loop
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    } 

    imgElement[currentIndex].classList.add('active');
    thumbElement[currentIndex].classList.add('focus');
    thumbMdElement[currentIndex].classList.add('focus-md');

})


for (let i = 0; i < imgElement.length; i++) {
    const thumbnailElement = thumbElement[i];
    thumbnailElement.addEventListener('click', function(){
        imgElement[currentIndex].classList.remove('active');
        thumbElement[currentIndex].classList.remove('focus');
        
        currentIndex = i;

        imgElement[currentIndex].classList.add('active');
        thumbElement[currentIndex].classList.add('focus');
    });
}