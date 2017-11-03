// Scroll Reveal config
window.sr = ScrollReveal({ duration: 2000 });
sr.reveal('.title h2, .miya h1, .miya h2, .miya div, .jobs, .two h2, .three h2, .four h2, .five h2, .six h2, .seven h2, .seven1 h2, .greg h2, .greg img, .jonh img, .jonh h2, .pati.heart div, .pati.lands div, .isa .topic',{
	origin: 'top',
	opacity: 0,
	reset: true
});
sr.reveal('.miya.carac .full h1', 1500);
sr.reveal('.miya.aspec .full h1', 1500);
sr.reveal('.miya.carac img', 4000);
sr.reveal('.fluxo-html', 5000);
sr.reveal('.fluxo-html img', 3000);

// sr.reveal('.search',{
// 	origin: 'top',
// 	opacity: 1,
// 	reset: true
// });


// Scrollify config
$.scrollify({
    section : ".magnet-section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: false,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
});
// $.scrollify.move("#scroll");

// var input_size = $('#input').val().length;

$( "#input" ).keyup(function() {
	// if($('#input').val().length >= 6){
	// 	$('span').show();
	// 	$('span').addClass("fade");
	// }
	var input = $('#input').val();
	$('#text').html(input);

	$(document).keypress(function(e) {
		if(e.which == 13) {
	        // alert('You pressed enter!');
	        // $(document).scrollTop( $("#8").offset().top );
	        $('#button')[0].click();
	    }
	});
});

