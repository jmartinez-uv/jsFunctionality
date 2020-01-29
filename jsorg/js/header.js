// put event handlers for header links here
	
var header = (function(){

	function headerLinkClicks(evt) {
		if($modal.is(":visible")){
			return closeModal(evt);
		}
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		var url = $(evt.target).attr("href");

		$.ajax(url, {dataType: "text" })
		.then(function(contents){
			$modal.html(contents).show();
		});

	}

	function closeModal(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		$content.empty();
		$modal.hide();

	}


	function init(){

		$modal = $("[rel='js-modal']");
		$close = $modal.children("[rel='js-close']");
		$content = $modal.children("[rel='js-content']");

		$close.on("click", closeModal);

		$("[rel='js-header']").on("click", "[rel*='js-']",headerLinkClicks);
	}

	var $modal, $close, $content;

	EVT.on("init", init);

	return {
	};

})();

