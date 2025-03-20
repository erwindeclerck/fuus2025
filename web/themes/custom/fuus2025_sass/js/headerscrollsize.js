/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.fuus2025_sass_scrollsize = {
    attach: function (context, settings) {

      $('.messages__wrapper').hide().fadeIn();
      setTimeout(function(){$('.messages__wrapper').fadeOut();}, 5000);
      $(window).click(function(){$('.messages__wrapper').fadeOut();});



//Example - show a div after 75% of the web page is scrolled.
      var webpage = $("body");
      var webpage_height = webpage.height();
//alert(webpage_height);
//       var trigger_height = webpage_height - 100;
//       console.log("trigger_height:"+trigger_height);
//       $(".justify-content-between").css('height', '600px');
//       $("header.sticky-top").css('position',  "relative");

      $(window).on('scroll',function (){

        // var top = $(window).scrollTop();
        // var fix = '600';
        // console.log(top,100);
        // if ($(window).scrollTop() > (400)) {
        //   // $(".justify-content-between").css('height',  "300px");
        //   // $("header.sticky-top").css('position',  "sticky");
        //
        // }else{
        //   // $(".justify-content-between").css('height', (fix - top) + 'px');
        //   // $("header.sticky-top").css('position',  "sticky");
        // }

      })




    }
  };

})(jQuery, Drupal);

