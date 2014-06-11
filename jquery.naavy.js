/**
 * Naavy
 * (c) 2014 Vital Design
 * Licensed under MIT
 */

;(function($) {

    function supports_touch() {
        return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0)|| (navigator.msMaxTouchPoints > 0));
    }

    $.fn.naavy = function() {

        var menu      = this.find('ul').filter(':first'),
            menuItems = menu.find('li'),
            parents   = menuItems.has('ul'),
            subMenus  = parents.find('ul');

            this.addClass('naavy-nav')
                .prepend('<a id="naavy-menu-toggle" href="#"><span class="naavy-icon naavy-icon-menu"></span>Menu</a>');

            menu.addClass('naavy-menu');
            subMenus.addClass('naavy-submenu');
            parents.addClass('naavy-parent')
                   .append('<span class="naavy-sub-toggle"><span class="naavy-icon naavy-icon-arrow"></span></span>');

            if ( supports_touch() ) {
                this.addClass('naavy-touch');
            } else {
                this.addClass('naavy-notouch');
            }

            menu.on('click', '.naavy-sub-toggle', function(){

                var subParent = $(this).closest('li'),
                    subMenu = $(this).siblings('.naavy-submenu'),
                    lowerParents = $(this).closest('li').find('.naavy-parent'),
                    lowerSubMenus = $(this).closest('li').find('.naavy-submenu');

                if ( subMenu.is(':hidden') ) {
                    subParent.addClass('active');
                    subMenu.slideDown(100);
                } else {
                    subParent.removeClass('active');
                    lowerParents.removeClass('active');
                    subMenu.slideUp(100);
                    lowerSubMenus.slideUp(100);
                }
            });

            $('#naavy-menu-toggle').click(function(event) {
                event.preventDefault();
                $(this).toggleClass('active');
                $('.naavy-menu').slideToggle(100);
            });

        return this;

    };

}(jQuery));