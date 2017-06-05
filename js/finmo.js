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
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2000);
            return false;
        }
    }
});


$("#open_modal").click(function(){
                // console.log('hi');
                $('#myModal').modal('show');
            });



 $(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    }); 
    
    // scroll body to 0px on click
    $('.back-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1600);
        return false;
    });
});
});
