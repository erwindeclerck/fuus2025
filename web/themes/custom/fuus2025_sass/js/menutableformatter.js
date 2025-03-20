/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.fuus2025_sass_menutable = {
    attach: function (context, settings) {


      // var nid = settings.path.currentPath.match(/node\/(\d+)/)[1];
      // var tfid = 'table#tablefield-node-'+nid+'-field_menu-0';
      var tfid = $('[id^=tablefield-node-]').attr('id');
      if(tfid){

      var nid = tfid.match(/tablefield-node-(\d+)-field_menu-0/)[1];
      function newtable(parentid, thisid, header, color) {
        var html = "";
        html += "<table id=T" + thisid + " class='table table-striped table-hover table-sm table-responsive caption-top' style='margin-bottom:2em;'>";
        html += "<caption style='color:" + color + ";'>" + header + "</caption>"
        html += "<tbody>";
        html += "</body>";
        $(parentid).append(html);
        return $(parentid + " table#T" + thisid);
      }

      var splitIndices = [];
      var titles = [];
      var colors = [];
      var rows = $("#"+tfid + ' tbody').children();

      rows.each(function (i, row) {
        var trigger = $(this).children('td').eq(0).text();
        var header = $(this).children('td').eq(1).text();
        if (trigger.match(/0/g)) {
          splitIndices.push(i);
          titles.push(header);
          colors.push('black');
        } else if (trigger.match(/1/g)) {
          splitIndices.push(i);
          titles.push(header);
          colors.push('red');
        } else if (trigger.match(/2/g)) {
          splitIndices.push(i);
          titles.push(header);
          colors.push('orange');
        } else if (trigger.match(/3/g)) {
          splitIndices.push(i);
          titles.push(header);
          colors.push('green');
        }
      });

      $("#"+tfid).remove();

      $(function () {
          for (var i = 0; i < splitIndices.length; i++) {
           var thistable = newtable('#tablefield-wrapper-node-'+nid+'-field_menu-0', i, titles[i], colors[i]);
        //    var thistable = newtable(tfid, i, titles[i], colors[i]);
            rows.slice(splitIndices[i] + 1, splitIndices[i + 1]).appendTo(thistable);

          }
        }
      );
      }




    }
  };

})(jQuery, Drupal);
