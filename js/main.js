$(function(){

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/arrow-right.svg" alt="next"></button>',
  });

  $('.tab').on('click', function(e){
    e.preventDefault(); /* cancel the standard hyperlink handler */

    $('.tab').removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active');

    $(this).addClass('tab--active');

    $($(this).attr('href')).addClass('tabs-content--active');
  });

  $('.product-item__favorite').on('click', function(){
    $('.product-item__favorite').toggleClass('product-item__favorite--active');
  });

});