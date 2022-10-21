$(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
          $('div.canvas').css('background','white')
        }
        else {
          $('div.canvas').css('background','transparent')
        }
      })
    })
