import Swiper, { Autoplay } from 'swiper';

export var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});