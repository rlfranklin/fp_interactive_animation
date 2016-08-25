$('.enter').click(function() {
	 window.location = 'slides.html'
	});


$('button').hover (function () {
	$(this).css({
		"background": "linear-gradient(black, white, silver, silver, white, silver, silver, white, black)",
		"background": "-webkit-linear-gradient(black, white, silver, silver, white, silver, silver, white, black)",
  		"background": "-moz-linear-gradient(black, white, silver, silver, white, silver, silver, white, black)",
  		"font-family": "\'Poiret One\', cursive", 
  		"color": "black" 		
  	});
	console.log("Oo");
});

$('button').mouseout (function () {
	$(this).animate({
		"border": "2px",
		"border-radius": "4px",
		"width": "20%",
		"font-size": "23px"
	}, 2000);
	
	$(this).css({
		"border-color": "white",
		"background": "linear-gradient(white, silver, #404040, black, #404040, silver, white)",
		"background": "-webkit-linear-gradient(white, silver, #404040, black, #404040, silver, white)",
		"background": "-moz-linear-gradient(white, silver, #404040, black, #404040, silver, white)",
		"position": "absolute",
		"color": "white",
		});

	$('.stay').show(3000);	
	$('.enter').show(3000);
	$('.hi').fadeOut(4000);
});

$('.stay').click(function() {
	 $(this).text("Enjoy");
	 $('.snow').fadeOut();
	 $('.enter').fadeOut(7000);
	 $('.notes').toggleClass('hidden_notes');
	});


// slide.html

var photo = [
	 "images/babies.png",
	 "images/path.png",
	 "images/nature.png",
	 "images/rose2.png",
	 "images/rose.png",
	 "images/succulents.jpg",
	 "images/flower_plant.png",
	 "images/cactus2.png",
	 "images/succulents2.jpg",
	 "images/succulents3.jpg",
	 "images/succulents4.png",
	 "images/succulents5.png",
	 "images/succulents5.png",
	 "images/succulents6.png",
	 "images/cactus.jpg",
	 "images/succulents7.png",
	 "images/succulents8.png"
 ]

function newPhoto() {
    var size = photo.length
    var x = Math.floor(
    	size * Math.random())
    	document.getElementById('photography').src = photo[x];
}


$('.change').click (function () {
$('#photography').animate({opacity:'1.0'}, 6000);
$('#photography').toggleClass('colorless');
$('#photography').animate({opacity:'0.8'}, 10000);
});


$('audio').hover (function () {
$(this).css("opacity", 1.0);
});

$('audio').mouseout(function () {
	$('this').css("opacity", 0.2);	
});

