(function($){

// Initializing variables
var $activeSlide = $(".active"),
	$homeSlide = $(".homeSlide"),
	$slideNavPrev = $(".slideNavPrev"),
	$slideNavNext = $(".slideNavNext"),
	$slideNavPrevA = $(".slideNavNext a"),
	$slideNavNextA = $(".slideNavNext a"),
	$hero = $(".hero");

	function init(){

		// Hide all slides apart from the active one
		TweenLite.set($homeSlide.not($activeSlide), {autoAlpha: 0});

		// Disable arrow down on page load
		TweenLite.set($slideNavPrev, {autoAlpha: 0.2});
	}

	init();

	// Go to next slide
	function goToNextSlide(slideOut, slideIn){

		var tl = new TimelineLite(),
			slideOutH1 = slideOut.find("h1"),
			slideOutP = slideOut.find("p"),
			slideInH1 = slideIn.find("h1"),
			slideInP = slideIn.find("p");

		// go to next slide Timeline 
		if(slideIn.length !== 0){
		tl
			.set(slideIn, {y: '100%', autoAlpha: 1, className: "+=active"})
			.set(slideOut, {className: "-=active"})
			.to([slideOutH1, slideOutP], 0.3, {y: '-=15px', autpAlpha:0, ease:Power3.easeInOut}, 0)
			.to(slideOut, 0.5, {y: '-100%', ease:Power3.easeInOut}, 0)
			.to(slideIn, 0.5, {y: '-=100%', ease:Power3.easeInOut}, 0)
			.fromTo([slideInH1, slideInP], 0.3, {y: '+=20px', autoAlpha: 0},{autoAlpha: 1, y:0, ease:Power1.easeInOut}, 0.3);
		
		};
		
	}

	// Seting active slide when navigation is clicked
	$slideNavNext.click(function(e){
		e.preventDefault();

		var slideOut = $(".homeSlide.active"),
			slideIn = $(".homeSlide.active").next(".homeSlide");

		goToNextSlide(slideOut, slideIn);
	});

})(jQuery);