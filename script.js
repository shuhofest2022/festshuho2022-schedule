$(function(){
    var _window = $(window),
        _header = $('.top-header'),
        heroBottom;

    _window.on('scroll', function(){
        heroBottom = $('.stars').height();
        if (_window.scrollTop() > heroBottom) {
            _header.addClass('transform');
        }
        else {
            _header.removeClass('transform');
        }
    });

    _window.trigger('scroll');
    function GethashID (hashIDName){
        if(hashIDName){
        $('.tab li').find('a').each(function() {
            var idName = $(this).attr('href');
            if(idName == hashIDName){ 
            var parentElm = $(this).parent(); 
            $('.tab li').removeClass("active"); 
            $(parentElm).addClass("active"); 
            $(".area").removeClass("is-active");
            $(hashIDName).addClass("is-active");
            }
        });
        }
    }
    
    $('.tab a').on('click', function() {
        var idName = $(this).attr('href');
        GethashID (idName);
        return false;
    });
    
    
    $(window).on('load', function () {
        $('.tab li:first-of-type').addClass("active");
        $('.area:first-of-type').addClass("is-active");
        var hashName = location.hash;
        GethashID (hashName);
    });

    $('.tab a').on('click', function() {
        var idName = $(this).attr('href');
        GethashID (idName);
        return false;
    });
    $(".info").modaal({
        overlay_close:true,
        before_open:function(){
            $('html').css('overflow-y','hidden');
        },
        after_close:function(){
            $('html').css('overflow-y','scroll');
        }
    });
})
