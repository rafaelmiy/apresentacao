// Scroll Reveal config
window.sr = ScrollReveal({ duration: 2000 });
sr.reveal('.one h2, .jobs, .two h2, .three h2, .four h2, .five h2, .six h2, .seven h2, .seven1 h2, .scroll h2',{
	origin: 'top',
	opacity: 0,
	reset: true
});
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

