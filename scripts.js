$(document).ready(function () {

    function getHeight() {
        var w = $(window).width();
        var h = $(window).height();
        console.log(w);
        console.log(h);
        $('.videoplayback').css('height', h);
    }

    console.log('start!');
    getHeight();

    $(window).resize(function () {
        console.log('resize!');
        getHeight();
    });

});