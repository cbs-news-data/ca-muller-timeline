/* script.js */

//jquery code
$(document).ready(function(){ // begin document.ready block

	//jquery code here
	$('#example').horizontalTimeline({
		// useScrollBtns: false,
		desktopDateIntervals: 300,
	tabletDateIntervals: 250,
	mobileDateIntervals: 200,
	});

	var height_of_container = $(".timeline-container").height();
	console.log(height_of_container)

	$(".timeline-container").css({"height":`${height_of_container + 200}`})

	var pymChild = new pym.Child({ polling: 500 });
	pymChild.sendHeight();

}); //end document.ready block
