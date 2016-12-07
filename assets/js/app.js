var background = ['#b00076','#5bbab8','#edc60f'];
var titleMission = ['Mission école pour nos super-héros !','Une super-chambre<br />pour des super-pouvoirs !','Des lieux de vie pour petits<br />et grands super-héros'];
var subtitleMission = ['Même à l’hôpital, un super-héros doit continuer à apprendre plein de choses ! Dans la nouvelle salle de classe, grâce à des installations adaptées, une enseignante spécialisée enseignera à tous les niveaux, pour que nos jeunes patients ne perdent pas le lien avec l’école.','Adaptées pour les patients à mobilité réduite, prévues pour accueillir un proche, les chambres individuelles seront le quartier général de chaque super-héros ! Ils pourront s’y reposer après les traitements, lire, rêver… pour reprendre des forces dans les meilleures conditions ! ','Enfants, bébés, adolescents : nos super-héros ont tous des besoins différents ! Pour favoriser leur épanouissement, notre nouvelle unité pédiatrique, adolescents et jeunes adultes comprendra des espaces de vie et de loisirs adaptés à chaque âge et ouverts sur l’extérieur : biberonnerie et nurserie pour les tout-petits, espaces de loisirs pour se retrouver autour d’activités ludiques et culturelles pour les plus grands.'];
var imgMission = ['https://s3.amazonaws.com/heroku-adfinitas-campaign/COL-lp-NouvUnit-2016/mission-1.png','https://s3.amazonaws.com/heroku-adfinitas-campaign/COL-lp-NouvUnit-2016/mission-2.png','https://s3.amazonaws.com/heroku-adfinitas-campaign/COL-lp-NouvUnit-2016/mission-3.png'];

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

	progressBar();

	if($(window).scrollTop()  > 85) {
		$('#header-sticky').show();
	}

	preload(imgMission);

	$('.block-titre-slider').first().css({'background-color':'#b00076'});

	setTimeout( function(){
		$('#img-header-1').fadeOut( 2000, function() {
		});
		$('#img-header-2').fadeIn( 2000, function() {
			$('#header').fadeIn( "slow", function() {
			});
			$('#btn-univers').fadeIn( "slow", function() {
				$('html, body').css({
					overflow: 'auto',
					height: 'auto'
				});
			});
			$('#progressbar-header').css({'display':'none'})

		});
	}  , 3500 );

});

$('.block-titre-slider').first().hover( function() {
	$(this).addClass('hovered');
	$(this).css({'background-color':'#b00076'});
})
$('.block-titre-slider').first().mouseleave( function() {
	if ($(this).hasClass('selected') == false) {
		$(this).css({'background-color':'#323531'});
	}
});
$('.block-titre-slider:nth-child(2)').hover( function() {
	$(this).css({'background-color':'#5bbab8'});
})
$('.block-titre-slider:nth-child(2)').mouseleave( function() {
	if ($(this).hasClass('selected') == false)
		$(this).css({'background-color':'#323531'});
});

$('.block-titre-slider:nth-child(3)').hover( function() {
	$(this).css({'background-color':'#edc60f'});
})
$('.block-titre-slider:nth-child(3)').mouseleave( function() {
	if ($(this).hasClass('selected') == false)
		$(this).css({'background-color':'#323531'});
});

$('.block-titre-slider').click( function() {
	var index = $(this).index();
	$(this).addClass('selected');
	$(this).css({'background-color':background[index]});
	console.log($(window).width());
	if ($(window).width() > 1023) {
		$(this).find(".arrow-selected").css({'display':'block'});
	}
	changeElementMission(index);
});

$('#btn-univers').click( function() {
	scrollTo($('.slider-slide'));
});

function changeElementMission(index) {
	removeCssOtherTitre(index);

	$('.block-display-slider > img').attr('src', imgMission[index]);
	$('.title').html(titleMission[index]);
	$('.subtitle').html(subtitleMission[index]);
	$('.btn.slide-slider').css({'background-color':background[index]});
	scrollToMission($('.block-display-slider'));

}

function removeCssOtherTitre(index) {
	var i = 0;

	$('.block-titre-slider').each( function() {
		if (i != index) {
			$(this).removeClass('selected');
			$(this).css({'background-color':'#323531'});
			$(this).find(".arrow-selected").css({'display':'none'});
		}
		i++;
	});
}

function 	scrollTo(next){
	var height;

	if($(window).width() < 700 )
		height = 126
	else
		height = 93;
	console.log(height);
	if ($(next).length != 0)
	{
		$('html, body').stop().animate({
			scrollTop: $(next).offset().top - height
		}, 700, 'swing');
		return false;
	}
};
function 	scrollToMission(next){
	var height;

	if($(window).width() < 700 )
		height = 126
	else
		height = 193;
	if ($(next).length != 0)
	{
		$('html, body').stop().animate({
			scrollTop: $(next).offset().top - (height)
		}, 700, 'swing');
		return false;
	}
};

function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
	});
}


function progressBar() {
	$('#progressbar-header .progress-meter').animate(
		{width: '100%'},
		4000);
	var count = 0;
	var counting = setInterval(function(){
		if(count < 101) {
			$('.progress-meter-text').text(count + '%');
			count++
		} else {
			clearInterval(counting)
		}
	}, 40);
}


