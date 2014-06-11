/**
 * VitalNav Responsive Navigation
 * (c) 2014 Vital Design
 * Licensed under MIT
 */

;(function($) {

    function supports_touch() {
        return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0)|| (navigator.msMaxTouchPoints > 0));
    }

    $.fn.vitalNav = function() {

        var menu      = this.find('ul').filter(':first'),
            menuItems = menu.find('li'),
            parents   = menuItems.has('ul'),
            subMenus  = parents.find('ul');

            this.addClass('vnav-nav')
                .prepend('<a id="vnav-menu-toggle" href="#"><span class="vnav-icon vnav-icon-menu"></span>Menu</a>');

            menu.addClass('vnav-menu');
            subMenus.addClass('vnav-submenu');
            parents.addClass('vnav-parent')
                   .append('<span class="vnav-sub-toggle"><span class="vnav-icon vnav-icon-arrow"></span></span>');

            if ( supports_touch() ) {
                this.addClass('vnav-touch');
            } else {
                this.addClass('vnav-notouch');
            }

            menu.on('click', '.vnav-sub-toggle', function(){

                var subParent = $(this).closest('li'),
                    subMenu = $(this).siblings('.vnav-submenu'),
                    lowerParents = $(this).closest('li').find('.vnav-parent'),
                    lowerSubMenus = $(this).closest('li').find('.vnav-submenu');

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

            $('#vnav-menu-toggle').click(function(event) {
                event.preventDefault();
                $(this).toggleClass('active');
                $('.vnav-menu').slideToggle(100);
            });

        return this;

    };

}(jQuery));