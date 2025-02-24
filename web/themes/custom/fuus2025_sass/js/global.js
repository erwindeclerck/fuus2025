/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.fuus2025_sass = {
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

      $(window).on('scroll',function (){

        var top = $(window).scrollTop();
        console.log(top,100);
        if ($(window).scrollTop() > (200)) {
          $("p").css('color', 'red');
        }else{
          $("p").css('color', 'green');
        }

      })




    }
  };

})(jQuery, Drupal);


//
// #header.bg-body-tertiary{
//   background-color: rgba(0,255,0,1)!important;
// .bg-warning{
//     background-color: rgba(255,255,0,0.5)!important ;
//   .navbar {
//       // opacity: 1;
//     }
//   }
// }
