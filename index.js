$(document).ready(function() {
	$('#wf-com').fullpage({
		anchors: ['Hello', 'Services', 'About'/*, 'Work'*/],
		//continuousVertical: true,
		verticalCentered: false,
		scrollOverflow: true,
		//to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
		css3:false
	});
});
