//scroll event
$(window).scroll(function(){
    headerScrollEvent();
});

// resize evnet
$(window).resize(function(){
    bannerResizeApply();
})

// header event
function headerScrollEvent() {
    let header = $(this).scrollTop();

    if( header > 0 ) {
        if( $('header').children().length > 1 ) {
            $('header, .header-tit').addClass('scroll');
        } else if( $('header').children().length == 1 ) {
            if( $('header').find('.hiddenText').length == 0) {
                $('header, .header-tit').addClass('scroll');
            }
        }
    } else {
        $('header, .header-tit').removeClass('scroll');
    }
}

// banner event
function bannerResizeApply() {
    windowHeight = $(window).height();
    if( windowHeight >= 624) {
        $('div.banner').addClass('large');
    } else{
        $('div.banner').removeClass('large');
    }
}


//accordian toggleBtn click event (PD-080200)
function toggleBtn() {
    $('.toggle').on('click', function(){
        $detail = $(this).next('.detail');

        $('.detail').slideUp();
        $('.toggle').removeClass('active');

        if( !$detail.is(':visible') ) {
            $detail.slideDown();
            $(this).addClass('active');
        } else {
            $detail.slideUp();
            $(this).removeClass('active');
        }
    });
}

// layer-popup click event
function layPopupOpen(param) {
    $('#'+param).css('display', 'block');
}

function layPopupClose(param) {
    $('#'+param).css('display', 'none');
}


function flickingPopupHeight() {
    windowHeight = $(window).height();
    descHeight = $('.lay-bottom .desc').outerHeight(true);
    btnHeight = $('.lay-bottom .btn-single').outerHeight(true);
    layBottomHeight = $('.lay-bottom').height();

    if( windowHeight < 700 ){
        $('.lay-bottom').css('max-height', '540px');
        $('.scroll').css({'overflow-y': 'scroll', 'height': 484 -(descHeight + btnHeight) + 'px' });
    } else {
        $('.lay-bottom').css('max-height', 'fit-content');
        $('.scroll').css({'overflow-y': '', 'height': 'auto' });
    }
}

function flickingPopupOpen() {
    $('.click').on('click', function(){
        $('.lay-popup').css('display','block');
        $('.lay-bottom').animate({bottom : 0}, 300);
        $('body').css('overflow','hidden');

        flickingPopupHeight();
    });
}

function flickingPopupClose() {
    $('.popup-close').on('click', function(){
        $(this).parents('.lay-bottom').animate({bottom : '-100%'}, 300, function(){
                $('.lay-popup').css('display','none');
                $('body').css('overflow','');
            }
        ); 
    });
}

//기존 작성된 고객정보 아코디언(PD-010102)
function toggleBtn2(){
    $('.business-info-box .toggle-btn').click(function(){
        if( $(this).prev('.details').is(':visible') ){
            //열려있음 -> 닫기
            $('.business-info-box .toggle-btn').prev('.details').hide(); 
            $(this).text('더보기').removeClass('fold');
        }else{
            //닫혀있음 -> 열기
            $('.business-info-box .toggle-btn').prev('.details').hide();
            $(this).prev('.details').show();
            $('.business-info-box .toggle-btn').text('더보기').removeClass('fold');
            $(this).text('접기').addClass('fold');
        }
    })
}
