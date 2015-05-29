$( document ).ready(function() {
    console.log( "ready!" );

$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('#par1').css('left',-(scrolled*2)'px');
}
    
});    