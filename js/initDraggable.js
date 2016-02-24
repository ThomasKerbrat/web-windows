/**
 * @param {Object} $element - jQuery object of the element.
 * @desc Register basic event handlers to manage element positioning.
 * @see {@link http://stackoverflow.com/questions/8960193/how-to-make-html-element-resizable-using-pure-javascript}
 */
function initDraggable($element) {
  var $wHeader = $element.find('header');
  var startX, startY, offsetX, offsetY;

  $wHeader.on('mousedown', initDrag);

  /**
   * @param {Object} e - Event object passed by jQuery.
   * @desc Save element position and mouse offset for the entire "mousemove" event duration.
   * Register handler for "mousemove" and "mouseup".
   */
  function initDrag (e) {
    startX = parseInt($element.css('left'));
    startY = parseInt($element.css('top'));
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    $(document.documentElement).on('mousemove', move);
    $(document.documentElement).on('mouseup', stop);
  }

  /**
   * @param {Object} e - Event object passed by jQuery.
   * @desc Handle element position calculation.
   */
  function move (e) {
    $element.css('left', e.clientX - offsetX - 2 );
    $element.css('top', e.clientY - offsetY - 2 );
  }

  /**
   * @param {Object} e - Event object passed by jQuery.
   * @desc Remove event handlers on "mouseup" event.
   */
  function stop (e) {
    $(document.documentElement).off('mousemove', move);
    $(document.documentElement).off('mouseup', stop);
  }
}
