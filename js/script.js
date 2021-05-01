// JS-функция определения поддержки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

$(document).ready(function() {
    $('.slider__items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/Left.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt="next"></button>',
        responsive: [
            {
              breakpoint: 1650,
              settings: {
                dots: false,            
                prevArrow: '<button type="button" class="slick-prev"><img src="img/Left.svg" alt="prev"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" alt="next"></button>'
              }
            }
          ]
    });

    $('.advent__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/Left_advent.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/Right_advent.png" alt="next"></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 900,
            settings: {
             arrows: false,
             slidesToShow: 2,
             slidesToScroll: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
             arrows: false,
             slidesToShow: 1,
             slidesToScroll: 1
            }
          }
        ]
      }
    );   
    
    new WOW().init();
});

