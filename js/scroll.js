
$('.content-photo').on('wheel', function(e){

   e.preventDefault();
   $(this).scrollLeft($(this).scrollLeft() + e.originalEvent.deltaY);

});
