moveScrollLeft = function() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX + 350);
};

moveScrollright = function() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX - 350);
};
