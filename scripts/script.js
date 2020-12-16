$('.slides__list').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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

$('.header__search-button').on('click', function(){
    if($(window).width() <= 1024){
        $('.header__search--mobile').toggle();
    }
});

$(window).resize(function() {
    if($(window).width() > 1024){
        $('.header__search--mobile').hide();
    }   
});