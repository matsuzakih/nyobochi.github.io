/*** ハンバーガーメニューの表示/非表示 ***/
$(function(){
  $('.hamburger').click(function() {
    $('.hamburger').toggleClass("active");
    $('.nav-menu').slideToggle();
  });
  $('.menu-item').click(function() {
    $('.hamburger').removeClass("active");
    $('.nav-menu').slideToggle();
  });

  var navPos = $( '.nav' ).offset().top; // グローバルメニューの位置
  var headerHeight = $( 'header' ).outerHeight(); // グローバルメニューの高さ
$( window ).scroll(function() {
  if ( $( this ).scrollTop() > navPos ) {
    $( '.nav' ).addClass( 'fixed' );
  } else {
    $( '.nav' ).removeClass( "fixed" );
  }
});
$( window ).scroll(function() {
  if ( $( this ).scrollTop() > headerHeight ) {
    $( '.nav' ).addClass( 'back' );
  } else {
    $( '.nav' ).removeClass( "back" );
  }
});
});
