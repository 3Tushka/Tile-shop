import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

new Splide('.splide').mount();

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        perPage: 3,
        perMove: 1,
        gap: 20,
        breakpoints: {
            1200: {
                perPage: 2,
            },
            991: {
                gap: 30,
            },
            576: {
                perPage: 1,
                gap: 0,
                arrows: false,
            },
        },
    }).mount();
});