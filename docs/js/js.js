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
  //прокручиваем страницы при нажатии на кнопку вверх
  $('.scrollToTop').click(function(event){
    event.preventDefault();
    $('html').animate({
        scrollTop:0
    }, 800);
  });
  //карточки
  $(window).scroll(function(){
    console.log($(this).scrollTop());
    if($(this).scrollTop()>1624){
      $('.wrapper-cards').fadeIn();
    }  if($(this).scrollTop()<1250) {
      $('.wrapper-cards').fadeOut();
  }
  });
  $(window).scroll(function(){
    console.log($(this).scrollTop());
    if($(this).scrollTop()>1624){
      $('.about-toggle_wraper').fadeIn();
    }  if($(this).scrollTop()<1250) {
      $('.about-toggle_wraper').fadeOut();
  }
  });
});
