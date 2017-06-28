function extractUrlParams() {
	var match,
	urlParams,
  pl     = /\+/g,  // Regex for replacing addition symbol with a space
  search = /([^&=]+)=?([^&]*)/g,
  decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
  query  = window.location.search.substring(1);

  urlParams = {};
  while (match = search.exec(query))
  	urlParams[decode(match[1])] = decode(match[2]);
  return urlParams;
}

var p = extractUrlParams();

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

	fillOutForm();
	if($(window).scrollTop()  > 85) {
		$('#header-sticky').show();
	}


});


$('#toForm').click( function() {
	scrollTo($('.slide.trois'));
})


$("#f_summit").click(function(e) {
	e.preventDefault();  


	var emailID = document.getElementById('f_email').value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");
	var filterPhone = /^[0-9-+]+$/;


	if (document.getElementById('f_name').value.length == 0) {  
		$('.prenom_nom').show();
		document.getElementById('f_name').focus() ;
		return false;  
	}
	else 
		$('.prenom_nom').hide();

	if ((document.getElementById('f_prenom').value.length == 0)) {
		$('.prenom_nom').show();
		document.getElementById('f_prenom').focus() ;
		return false;  
	}
	else 
		$('.prenom_nom').hide();

	if ((document.getElementById('f_email').value.length == 0)) {
		$('.email').show();
		document.getElementById('f_email').focus() ;
		return false;  
	}
	else 
		$('.email').hide();

	if (atpos < 1 || ( dotpos - atpos < 2 ) && index.html) 
	{
		$('.email').show();
		document.getElementById('f_email').focus() ;
		return false;
	}
	else
		$('.error email').hide();

	if (document.getElementById('f_phone').value.length != 0 && !(filterPhone.test(document.getElementById('f_phone').value))
		|| (document.getElementById('f_phone').value.length != 10)) {
		$('.phone').show();
	document.getElementById('f_phone').focus() ;
	return false;

}
else {
	$('.phone').hide();
}

submitForm();
});


function 	scrollTo(next){
	var height;

	if($(window).width() < 700 )
		height = 126
	else
		height = 23;
	if ($(next).length != 0)
	{
		$('html, body').stop().animate({
			scrollTop: $(next).offset().top - 60
		}, 700, 'swing');
		return false;
	}
};


function showNotif() {
	$('.notification').slideDown( "slow", function() {
		setTimeout(function(){
			$('.notification').slideUp("slow");
		}, 5000);
	});
}

function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
	});
}


function fillOutForm() {
	if ('lastname' in p)
		$('input[name=lastname]').val(p['lastname']);
	if ('firstname' in p)
		$('input[name=firstname]').val(p['firstname']);
	if ('email' in p)
		$('input[name=email]').val(p['email']);
	if ('phone' in p)
		$('input[name=phone]').val(p['phone']);
}


$(function(){
	$("#f_phone").intlTelInput({initialCountry: "fr", onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk", 
		"ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv", 
		"li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro", 
		"ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"] });
});


/* form-to-db */
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	}
	return "";
}

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
} else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
} else {
    // CORS not supported
    xhr = null;
}
return xhr;
}

function makeCorsRequest(data) {		 
	var url = 'https://adfinitas-io.herokuapp.com/api/v1/organization/09085378-4901-41bb-a83a-ac2330eb9eb7/webhook/db6d5617-5e31-4513-ae9f-75bfc1f6a9c0'; 

	var body = JSON.stringify(data);
	var xhr = createCORSRequest('POST', url);
	if (!xhr) {
		alert('CORS not supported');
		return;
	}
	xhr.setRequestHeader('Content-Type', 'application/json');
  // Error Handler
  xhr.onerror = function() {
  	alert('Woops, there was an error making the request.');
  };
  xhr.send(body);
}
/* end form-to-db */


function pureField(string) {
	return (string.replace(/'/g, "%27").replace(/"/g, "&quot;"));
}

function submitForm() {

	var data = {
		"db": {
			"schema": "col_course_2017",
			"db": {
				"email": pureField($("input[name='email']").val()),
				"phone": pureField($("input[name='phone']").val()),
				"firstname": pureField($("input[name='firstname']").val().toUpperCase()),
				"lastname": pureField($("input[name='lastname']").val().toUpperCase()),
				"name": pureField($("input[name='firstname']").val()) + ' ' + pureField($("input[name='lastname']").val()),
				"language": $("input[name='language']").val(),
			}
		},
		"mailjet": {
			"Email": pureField($("input[name='email']").val()),
			"Properties": {
				"lastname": pureField($("input[name='lastname']").val()),
				"firstname": pureField($("input[name='firstname']").val()),
				"language": $("input[name='language']").val()
			},
			"addLists": ['col_course_2017'],
			"delLists": []
		},
    //"grecaptcha_response": grecaptcha.getResponse()
}
//console.log(data);
makeCorsRequest(data);
showNotif();
}