$('.main-header .menu').click(function(){
  $('.main-header .main-nav').addClass('active');
  $(this).addClass('active');
});

$('.main-header .close-btn').click(function(){
  $('.main-header .main-nav').removeClass('active');
  $('.main-header .menu').removeClass('active');
});

$('.portfolio-block').hover(function(){
  $(this).find(".h5-h4-wrap").toggleClass('active');
  $(this).find(".tap-to").toggleClass('active');
});

$('.main-header .main-nav .nav a').click(function(){
  $('.main-header .main-nav').removeClass('active');
  $('.main-header .menu').removeClass('active');
});


var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
