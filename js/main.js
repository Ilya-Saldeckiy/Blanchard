document.addEventListener('DOMContentLoaded', function() {

    var mySwiper = new Swiper('.first-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        // spaceBetween: 200,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 4500,
        },
    })

    var swiper = new Swiper('.second-slider', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
        
        pagination: {
            el: '.pagination2',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(function() {
        $( ".accordion" ).accordion({
            active: false,
            collapsible: true,
            heightStyle: "content",
        } );
    });

    var swiper = new Swiper('.three-slider', {
        slidesPerView: 3,
        spaceBetween: 50,
        
        pagination: {
            el: '.pagination2',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    var mySwiper = new Swiper('.four-slider-container', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 50,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next-project',
            prevEl: '.swiper-button-prev-project',
        },

        // autoplay: {
        //     delay: 4500,
        // },
    })





})