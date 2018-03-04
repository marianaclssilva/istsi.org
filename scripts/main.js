$(document).ready(function () {
    'use strict';

    $('nav a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 500);

        var toggle = $('.navbar-toggle');
        if (toggle.css('display') !== 'none') {
            toggle.trigger('click')
        }
    });
});