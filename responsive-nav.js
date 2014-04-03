jQuery( document ).ready( function( $ ) {

	// Small Main Navigation
	var smallMainNavigation = function () {
		var $menu = $('#main-menu'),
			$menulink = $('.menu-toggle'),
			$menuTrigger = $('.menu-item-parent > a');
		$menulink.click(function(e) {
			e.preventDefault();
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
		});
		$menuTrigger.click(function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass('active').next('ul').toggleClass('active');
		});
	}();

});