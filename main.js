$(function() {
    $('.slick-car').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000
    });
    $('.category-carousel').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
    });
    $('.trending-carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 6,
        arrows:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    })
});