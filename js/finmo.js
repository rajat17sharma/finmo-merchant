$(document).ready(function() {


    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });


    $('#featuresSlider').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
    });

    $('#showcaseSlider').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        imagesLoaded: true
    });


    $(".youtube-media").on("click", function(e) {
        var jWindow = $(window).width();
        if (jWindow <= 768) {
            return;
        }
        $.fancybox({
            href: this.href,
            padding: 4,
            type: "iframe",
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
        });
        return false;
    });

    $("a.single_image").fancybox({
        padding: 4,
    });

    $(".hero .container").on('click', '#trigger-overlay', function() {
        //console.log('hi');
        $(this).toggleClass("active");
        $(".overlay-finmo").toggleClass("open");
    });

    $(".overlay ul li a").click(function() {
        $(".nav-toggle").toggleClass("active");
        $(".overlay-finmo").toggleClass("open");
    });

    $(".overlay").click(function() {
        $(".nav-toggle").toggleClass("active");
        $(".overlay-finmo").toggleClass("open");
    });


});