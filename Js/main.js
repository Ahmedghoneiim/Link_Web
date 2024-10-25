$(function () { 
    'use strict';
    $('.color-switcher span').on('click' , function() {
        $(':root').css('--maincolor', $(this).data('color'));
    });
});