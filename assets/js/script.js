function menu() {
	var menu = jQuery('#magicLineNav'),
		line = jQuery('.line'),
		start = menu.offset().left;
	jQuery('li', menu).hover(function() {
	  line.width($(this).position().left + $(this).width() / 2);
	}, function() {
	  line.width(0);
	})
  }
  
  jQuery(function($) {
	menu();
  })