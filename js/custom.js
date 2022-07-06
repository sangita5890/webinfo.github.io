// toggle button css
$(document).ready(function(){
// Header toggle // 
$("#toggle").click(function() {
  $(this).toggleClass("on");
  $(".header_main .h_box .h_part2 .h_inner .h_left .h_menu>ul").toggleClass('show');
});
//  Header sticky //
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.header_main').addClass('fixed-header');
        $('.h_menu').addClass('visible-color');
        $('.h_right').addClass('visible-color');
        $('.header_logo_toggle').addClass('show');
    }
    else {
        $('.header_main').removeClass('fixed-header');
        $('.h_menu').removeClass('visible-color');
        $('.h_right').removeClass('visible-color');
        $('.header_logo_toggle').removeClass('show');
    }
});
// slider //
$('.blog_flex').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});