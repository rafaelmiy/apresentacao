// Scroll Reveal config
window.sr = ScrollReveal({ duration: 2000 });
sr.reveal('.one h2, .two h2', {
	origin: 'top',
	opacity: 0
});


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
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
});