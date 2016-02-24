var $windows = $('.draggable');

if ($windows && $windows.length) {
  for (var i = 0; i < $windows.length; i++) {
    initDraggable( $($windows[i]) );
  }
} else {
  console.info('No windows detected');
}
