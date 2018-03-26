"use strict";
$(window).on('load', function() {
    $(".preloader").delay(700).fadeOut().remove();
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
});
$('.u-nav').on('click', function(){
    $(this).toggleClass('is-open');
    $('.u-nav-container').toggleClass('is-open');
});
$(document).ready(function(){
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
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('.mbox').animate({scrollTop: top}, 700); //$('body, html').animate({scrollTop: top}, 700);
});
//scroll down
$(document).on("click", "#scroll", function(e){
    var destination = $(window).height();
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 700);
    return false;
});
$(document).on("mousewheel", ".main-page", function(e){
    if ( e.originalEvent.wheelDelta < -100 ) {
        var destination = $(window).height();
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 700);
        return false;
    }
});
$(document).on("mousewheel", "body", function(e) {
    (function(){
        var windowHeight = $(window).height();
        if ( $(window).scrollTop() >= windowHeight ) {
            $('.header__tel').addClass('invisible');
            $('.lateral').removeClass('invisible');
        } else  {
            $('.header__tel').removeClass('invisible');
            $('.lateral').addClass('invisible');
        }
    })();
});
(function(){
    // get target element
    var about = document.querySelector('.about');
    var portfolio = document.querySelector('.portfolio');
    var blog = document.querySelector('.blog');
    // get
    var lateralAbout = document.querySelector('.lateral-about');
    var lateralPortfolio = document.querySelector('.lateral-portfolio');
    var lateralBlog = document.querySelector('.lateral-blog');

    var Visible = function (target, list) {
            // all positions element
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // positions window
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };
        if (targetPosition.bottom > windowPosition.bottom && targetPosition.top < windowPosition.bottom) {
            // Если элемент полностью видно, то запускаем следующий код
            console.clear();
            console.log('Вы видите элемент :)');
            list.classList.remove('invisible');
        } else {
            // Если элемент не видно, то запускаем этот код
            list.classList.add('invisible');
            console.clear();
        };
    };
    // Запускаем функцию при прокрутке страницы
    var scrollElement = document.querySelector('.mbox'); //просто тут сколиться не body, a .mbox
    scrollElement.addEventListener('scroll', function() {
        Visible (about, lateralAbout);
        Visible (portfolio, lateralPortfolio);
        Visible (blog, lateralBlog);
    });
    // А также запустим функцию сразу. А то вдруг, элемент изначально видно
    Visible (about, lateralAbout);
    Visible (portfolio, lateralPortfolio);
    Visible (blog, lateralBlog);
})();


$(document).on("click", ".js-scroll-anchor", function(e){
    e.preventDefault();
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