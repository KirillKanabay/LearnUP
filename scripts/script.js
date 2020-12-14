$('.slides__list').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1024,
            settings:{
                slidesToShow: 1,
            }
        }
    ]
});

$('.slider__button--back').on('click', function(){
    $('.slides__list').slick('slickPrev');
});

$('.slider__button--next').on('click', function(){
    $('.slides__list').slick('slickNext');
});

