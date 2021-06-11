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
        slidesPerGroup: 3,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            319: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            },
            // when window width is >= 480px
            768: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
            },
            // when window width is >= 640px
            1024: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
            },

            1400: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
            }
        },
        
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
            // active: false,
            // collapsible: true,
            heightStyle: "content",
        } );
    });

    if (window.matchMedia('(min-width: 768px)').matches) {
        var swiper = new Swiper('.three-slider', {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,

            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                slidesPerView: 2,
                spaceBetween: 20
                },
                // when window width is >= 480px
                769: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2,
                },
                // when window width is >= 640px
                1025: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 2,
                },

                1400: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
                }
            },
            
            pagination: {
                el: '.pagination2',
                type: 'fraction',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    var mySwiper = new Swiper('.four-slider-container', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,

        // Responsive breakpoints
        breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        },
        // when window width is >= 480px
        769: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
        },
        // when window width is >= 640px
        1025: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
        },

        1400: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        }
        },

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

    if (window.matchMedia('(max-width: 768px)').matches) {
        new Swiper('.cards', {
          wrapperClass: 'cards__list',
          slideClass: 'cards__item',
          navigation: false,
          scrollbar: false,
          pagination: {
            el: '.events__pagination',
            type: 'bullets',
          },
          spaceBetween: 50,
          a11y: {
            firstSlideMessage: 'Это первая карточка',
            lastSlideMessage: 'Это последняя карточка',
            paginationBulletMessage: 'Карточка номер {{index}}',
            prevSlideMessage: 'Предыдущая карточка',
            nextSlideMessage: 'Следующая карточка',
          },
        });
      }

    let addPadding = document.querySelector('.choices');
    let secondSlider = document.querySelector('.second-slider')

    addPadding.addEventListener('click', function () {
        secondSlider.classList.toggle('padding__active')
    })

    let categoriButton = document.querySelector('.label')
    let filterBlock = document.querySelector('.publications-form__mobile')
    
    categoriButton.addEventListener('click', function () {
        filterBlock.classList.add('label__disable')
    })


    


})