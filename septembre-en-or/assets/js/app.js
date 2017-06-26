$(window).resize( function() {
});

$(window).scroll(function() {
	var height = $(window).scrollTop();

	if(height  > 85) {
		$('#header-sticky').show();
	}
	if(height  < 85) {
		if ($('#header-sticky').css('display') != 'none')
			$('#header-sticky').css({'display':'none'})
	}
});

$(document).ready ( function() {


	if($(window).scrollTop()  > 85) {
		$('#header-sticky').show();
	}


});






function 	scrollTo(next){
	var height;

	if($(window).width() < 700 )
		height = 126
	else
		height = 93;
	if ($(next).length != 0)
	{
		$('html, body').stop().animate({
			scrollTop: $(next).offset().top - height
		}, 700, 'swing');
		return false;
	}
};




function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
	});
}





