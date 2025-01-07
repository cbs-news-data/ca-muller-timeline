/* script.js */

//jquery code
$(document).ready(function(){ // begin document.ready block

	//jquery code here
	$('#example').horizontalTimeline({
		// useScrollBtns: false,
		iconClass: {
			"base": "fas fa-1x"
			}
	});


	var pymChild = new pym.Child({ polling: 500 });
	pymChild.sendHeight();

}); //end document.ready block
