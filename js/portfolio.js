moveScrollLeft = function() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX + 500);
};

moveScrollright = function() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX - 500);
};
