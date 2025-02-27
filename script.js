const body = document.querySelector('header')

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

      // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
      // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    on: {
        slideChange: function () {
            let activeSlide = document.querySelector('.swiper-slide-active');
            if(activeSlide) {
                let bgColor = activeSlide.getAttribute('data-bg');
                body.style.backgroundColor = bgColor;
            }
        }
    }
});
