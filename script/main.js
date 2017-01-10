(function(window, document, $) {
  'use strict';

  var $header = $('#header');
  var $panel = $('.panel');
  var $reel = $('#image-reel');
  var $listItems = $('#image-list li');
  var $large = $('#image-large');
  var $date = $('#image-date');
  $listItems.on('click', function () {
    var title = $(this).find('img').attr('alt');
    var src = $(this).find('img').attr('src');
    $large.attr('src', src);
    $date.text(title);
  });

  function onResize () {
    var h = window.innerHeight;
    var w = window.innerWidth;
    var headerHeight = $header.innerHeight();
    if (w > h) {
      $large.css('height', (h - headerHeight) + 'px');
      $large.css('width', '');
    }
    else {
      $large.css('width', '100%');
      $large.css('height', '');
    }
    $reel.css('height', (h - headerHeight) + 'px');
  }

  $(window).on('resize', onResize);
  onResize();

})(this, window.document, jQuery);
