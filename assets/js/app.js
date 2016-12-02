var background = ['#b00076','#5bbab8','#edc60f'];
var titleMission = ['Mission école pour nos super-héros !','Une super-chambre<br />pour des super-pouvoirs !','Des lieux de vie pour petits<br />et grands super-héros'];
var subtitleMission = ['Même à l’hôpital, un super-héros doit pouvoir apprendre plein de choses comme à l’école ! Dans la nouvelle salle de classe, une enseignante spécialisée enseignera à tous les niveaux, pour que nos jeunes patients ne soient pas en rupture avec le système scolaire. ','Equipées pour les enfants à mobilité réduite, prévues pour accueillir un proche, les chambres individuelles seront le quartier général de chaque super-héros ! Ils pourront s’y reposer après les traitements, lire, rêver… pour reprendre des forces dans de bonnes conditions ! ','Enfants, bébés, adolescents : nos super-héros ont tous des besoins différents ! Pour favoriser leur épanouissement, notre nouvelle unité pédiatrique comprendra des espaces de vie et de loisirs adaptés à chaque âge et ouverts sur l’extérieur : biberonnerie et nursery pour les tout-petits, salon pour se retrouver autour d’activités ludiques et culturelles pour les plus grands.'];
var imgMission = ['https://s3.amazonaws.com/heroku-adfinitas-campaign/COL-lp-NouvUnit-2016/mission-1.png','https://s3.amazonaws.com/heroku-adfinitas-campaign/COL-lp-NouvUnit-2016/mission-2.png','https://s3.amazonaws.com/heroku-adfinitas-campaign/COL-lp-NouvUnit-2016/mission-3.png'];

$(document).ready ( function() {
	preload(imgMission);

	$('.block-titre-slider').first().css({'background-color':'#b00076'});
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

function changeElementMission(index) {
	removeCssOtherTitre(index);

	$('.block-display-slider > img').attr('src', imgMission[index]);
	$('.title').html(titleMission[index]);
	$('.subtitle').html(subtitleMission[index]);
	$('.btn.slide-slider').css({'background-color':background[index]});
	scrollTo($('.block-display-slider'));
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
	if ($(next).length != 0)
	{
		$('html, body').stop().animate({
			scrollTop: $(next).offset().top - 1
		}, 700, 'swing');
		return false;
	}
};

function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
	});
}


