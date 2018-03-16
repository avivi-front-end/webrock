"use strict";
$('.u-nav').on('click', function(){
    $(this).toggleClass('is-open');
    $('.u-nav-container').toggleClass('is-open');
});
$(document).ready(function(){
    // animation text write
    setTimeout(function(){
        (function(){
            $.fn.animate_Text = function() {
                var string = this.text();
                return this.each(function(){
                    var $this = $(this);
                    $this.html(string.replace(/./g, '<span class="new">$&</span>'));
                    $this.find('span.new').each(function(i, el){
                        setTimeout(function(){ $(el).addClass('div_opacity'); }, 50 * i);
                    });
                });
            };
            $('#write-text').show();
            $('#write-text').animate_Text();
        })();
    },700);
    $('.js-key-persons').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.js-main-persons').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.js-main-persons-text',
        responsive: [
            {
                breakpoint: 1681,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.js-main-persons-text').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.js-main-persons',
        responsive: [
            {
                breakpoint: 1681,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.follow-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    (function(){
        if ( $(window).width() > 600 ) {
            $('.portfolio__box').masonry({
                itemSelector: '.gallery',
                columnWidth: 20,
                gutter: 10
            });
            $('.blog__gallery').masonry({
                itemSelector: '.post',
                columnWidth: 20,
                gutter: 30
            });
        }
    })();

});
//scroll to #href
$(document).on("click", ".js-scroll-to", function(e){
    e.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 700);
});
//scroll down
$(document).on("click", "#scroll", function(e){
    var destination = $(window).height();
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 700);
    return false;
});


$(document).on("click", ".js-scroll-anchor", function(e){
    $(this).find('.anchors__box').toggleClass('active');
    $(this).toggleClass('active');
});
// $('.main-persons').on("mouseenter", ".main-person", function(e){
//     $('.main-person-text').css('opacity','1');
// });
// $('.js-main-persons-text').on("mouseenter", ".main-person", function(e){
//     if ($('.main-person-text').length > 0) {
//         $('.main-person').removeClass("main-person-text");
//     } else {
//         $('.main-person').addClass("main-person-text");
//     }
// });


function initMap() {
    var markerPosition = {lat: 49.426269, lng: 26.989378};//{lat: 49.426269, lng: 26.989378}
    var centerPosition = {lat: 49.421028, lng: 26.993584};
    var markerImg = './images/map-marker.png';
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: centerPosition,
        styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#c3c6cc"}]}, // name place
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#fbfbfc"}]}, // bg landscape
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
            {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":"#e9ebed"}, // bg river
            {"visibility":"on"}]}
            ]
    });
    var marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        icon: markerImg
    });
}