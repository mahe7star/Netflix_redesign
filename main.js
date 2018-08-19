$(function() {
    $(window).on('scroll', function(event) {
      var scrollValue = $(window).scrollTop();
      if ( scrollValue > 70) {
          $('.navbar').addClass('fixed-top');
      } 
      if(scrollValue < 70) {
        $('.navbar').removeClass('fixed-top');
      }
    });

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
    });
    $('.movie-category-carousel').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
    });

    // range slider
    $('input[type="range"]').change(function () {
      
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      console.log($(this)[0].value);
      $('#ratingValue').text($(this)[0].value);

      $(this).css('background-image',
                  '-webkit-gradient(linear, left top, right top, '
                  + 'color-stop(' + val + ', #ffc107), '
                  + 'color-stop(' + val + ', #C5C5C5)'
                  + ')'
                  );
  });
    
});