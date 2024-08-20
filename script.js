// Prendiamo gli elementi dal DOM
const carouselElement = document.querySelector('.carousel-photo');
const arrowLeftElement = document.querySelector('.fa-arrow-left');
const arrowRightElement = document.querySelector('.fa-arrow-right');



// Creazione variabili
const imgs = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
let htmlElement = '';


// Costruzione dinamica della stringa nel DOM
for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    htmlElement += `<img src="${img}" alt="img-${i + 1}">`
}
carouselElement.innerHTML = htmlElement;


// Prendiamo gli elementi del DOM creati col ciclo for
const imgElement = document.querySelectorAll('.carousel-photo img');


// Rendiamo visibile la prima img
let currentIndex = 0;
imgElement[currentIndex].classList.add('active');


// Arrow left & right
arrowRightElement.addEventListener('click', function(){
    
    imgElement[currentIndex].classList.remove('active');
    
    currentIndex ++;

    if (currentIndex === imgs.length) {
        currentIndex = 0;
    } 

    imgElement[currentIndex].classList.add('active');

})

arrowLeftElement.addEventListener('click', function(){
    
    imgElement[currentIndex].classList.remove('active');
    
    currentIndex --;

    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    } 

    imgElement[currentIndex].classList.add('active');

})
