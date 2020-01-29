/*
$(document).ready(function(){

	function loadPerson(evt){
		var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");
		//debugger;

		$.ajax("details/" + ID + ".html", { dataType: "text" }).then(function(contents){
			$content.html(contents);
		});
	}

	var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	var $content = $("[rel=js-details]");

	$items.on("click", "[rel*='js-item-']", loadPerson);

	// on click of a carousel item, do an Ajax request for
	// the "details/2.html" (or whatever) file for the person
	// clicked, and load those contents into the `$content` div.

	// hint: you will probably want to use "event propagation"
	// (aka "event delegation"), by attaching a single event
	// handler the `$content` element rather than individual
	// event handlers to each item in the carousel.

});
*/
var detail = (function(){

	function loadPerson(ID){
		//var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");
		//debugger;

		$.ajax("details/" + ID + ".html", { dataType: "text" }).then(function(contents){
			$content.html(contents);
		});
	}

	function selectPerson(evt) {
		evt.preventDefault();
		var ID = $(evt.target).attr("data-person");

		EVT.emit("person-selected",ID);
	}


	function init() {

		//$items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
		$content = $("[rel=js-details]");

		$content.on("click", "[rel=js-select-person]", selectPerson);

		//$items.on("click", "[rel*='js-item-']", loadPerson);
		EVT.on("person-selected", loadPerson);

	}
	var  $content;
		//$items,

	EVT.on("init", init);

	return {
	};
})();