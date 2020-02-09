$(document).ready(function(){
    //модальное окно
    $('.about__toggle').click(function(event){
    event.preventDefault();
    $('.about-slider-box').hide();
    var href = $(this).attr('href');
    console.log(href);
    $(href).show();
  });
  //отображение кнопки при прокрутке
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop()>1400) {
            $('.scrollToTop').fadeIn();
        } if($(this).scrollTop()<800) {
            $('.scrollToTop').fadeOut();
        }
    });
   var windowHeight = $(window).height();
   console.log(windowHeight);
  //прокручиваем страницы при нажатии на кнопку вверх
  $('.scrollToTop').click(function(event){
    event.preventDefault();
    $('html').animate({
        scrollTop:0
    }, 800);
  });
});
