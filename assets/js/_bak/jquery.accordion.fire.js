$(document).ready(function() {
	$('#only-one [data-accordion]').accordion();
	$('#multiple [data-accordion]').accordion({
		singleOpen: false,
		transitionEasing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
		transitionSpeed: 800
	});
	$('#single [data-accordion]').accordion({
		transitionEasing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
		transitionSpeed: 800
	});
});