$(document).ready(function($){
	$('.counter-itm__numeric span').counterUp({
		delay: 10,
		time: 1000
	});
});
/***********************************************/
$('.portfolio-itms').not(':first').hide();
$('.portfolio-nav li').click(function() {
	$('.portfolio-nav li').removeClass('active').eq($(this).index()).addClass('active');
	$('.portfolio-itms').hide().eq($(this).index()).fadeIn()
}).eq(0).addClass('active');
/************************************************/
    $(".location-map-active").click(function (e) {
      e.preventDefault();
      $("#map-responsive").slideToggle("slow");
    });


