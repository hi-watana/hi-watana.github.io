$(function(){
    let header = $('.navbar');
    var headerHeight = header.outerHeight();
    $('a[href^="#"]').click(function() {
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHeight;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

    $(".navbar-brand").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});
