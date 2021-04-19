$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});

// animate load

$(window).on('load', function() {

    $('.gambar').addClass('muncul');
    $('.text').addClass('muncul');

});

$('.nav-link').on('click', function() {
    $('nav-link').addClass('aktif');

});