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

    $('.dropdown-menu li a').click(function(e) {
        e.preventDefault();
        $(this).parents('.dropdown').find('#selected-course').text($(this).text());
        $(this).parents('.dropdown').find('.btn').val($(this).data('value'));
    });

    $('.filter-course').on('click', function () {
        var $this = $(this);

        $('.filter-course.active').removeClass('active');
        $this.addClass('active');

        var course = $this.data('filter');
        $('.filterable-course').each(function () {
            var $this = $(this);
            $this.parent()[(course === 'All' || $this.text().indexOf(course) !== -1) ? 'show' : 'hide']();
        });
    });
});