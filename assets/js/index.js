$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });

    $('.photo-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});


window.addEventListener("scroll", () => {
    const navBar = document.querySelector(".navbar");
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }

    const scrollToTop = document.querySelector('.scroll-top')
    const scroll = window.scrollY

    if (scroll > 175) {
        scrollToTop.classList.add("show2");
    } else {
        scrollToTop.classList.remove("show2")
    }
});


var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 700,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 700,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 700,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 5,
        }
    },
});




