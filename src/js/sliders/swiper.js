import Swiper, { Autoplay } from 'swiper';

export var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});