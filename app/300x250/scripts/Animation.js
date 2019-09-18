var app = app || {};


app.Animation = (function () {

	
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax({paused:true});
	var banner = document.getElementById('banner');
	var txt1a = document.getElementById('txt1a');
	var txt1b = document.getElementById('txt1b');
	var txt2a = document.getElementById('txt2a');
	var txt2b = document.getElementById('txt2b');
	
	var cta = document.getElementById('cta');
	var curtain = document.getElementById('curtain');
	var resolve = document.getElementsByClassName("resolve");
	var container = document.getElementsByClassName("container");
	

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(cta, {transformOrigin: "50% 70%"});
		t.set(container, {scale:.5, y:"-=10"});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.to(txt1a, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt1b, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})

		.to(txt1a, .5, {opacity: 0}, "+=1.5")
		.to(txt1b, .5, {opacity: 0}, "-=.5")

		.to(txt2a, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt2b, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})

		.to(curtain, .75, {opacity: 1, onComplete: function () {tl2.play();}}, "+=1.5")

		.set(resolve, {display: "block"})

		.to(txt3, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(container, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut}, "-=.5")

		.from(cta, .5, {scale: 0, opacity: 0, ease: Sine.easeInOut}, "-=.25");

		tl2.to(flag, 0.1, {display: "block"})
		.to(sprite, 1, {x: -1836, ease: SteppedEase.config(18)});
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
