

/* 페이지 로드후 공통 이벤트 */
function loadFn(){
    settingScript();
    clickDefaultFn();
    accordionFn();
    accordionTitAreaFn();
    agreeChkClickFn();
    accordionBtnFn();
}

/* 페이지 리사이즈 이벤트 */
function resizeFn(){

}

/* 페이지 스크롤 이벤트 */
function scrollFn(){

}

//setting.js import
function settingScript(){
    $('head').append('<script src=\'../../assets/js/setting.js\'><\/script>');

    // $.getScript("setting.js", function(){
    //    document.write(str);
    // });
}

//클릭 방지 이벤트
function clickDefaultFn(){
    $('a[href="#"]').click(function(e){
       e.preventDefault();
    });
}

//accordion event
function accordionFn(){
    $('.btn-more').on('click', function(){
        let $brief = $(this).siblings('.brief'),
            $listLi = $(this).parents('li');

        if( $brief.is(':visible') ){
            $('.list li').removeClass('active');
            $listLi.addClass('active');
            $(this).text('접기');
        } else{
            $listLi.removeClass('active');
            $(this).text('더보기');
        }
    });
}

function accordionTitAreaFn(){
    $('.accordion .tit').on('click', function(){
        let $detial = $(this).siblings('.detail');

        $('.accordion .tit').removeClass('active');
        $('.accordion .detail').slideUp();

        if( !$detial.is(':visible') ){
            $(this).addClass('active');
            $detial.slideDown();
        } else{
            $(this).removeClass('active');
            $detial.slideUp();
        }
    });
}

function accordionBtnFn(){
    $('.btn-dropdown').on('click', function(){
        let $detail = $(this).parents('.brief').siblings('.detail');

        if( !$detail.is(':visible') ){
            $(this).addClass('active');
            $detail.slideDown();
        } else{
            $(this).removeClass('active');
            $detail.slideUp();
        }
    });
}

function agreeChkClickFn(){

    $('.all-chk input[name="allChk"]').on("change", function(){
        let $listChk = $(this).parents('.agree-chk').children('.list-chk');

        if( $(this).is(':checked') ){
            $listChk.find('input:checkbox').attr("checked", true);
        }else{
            $listChk.find('input:checkbox').attr("checked", false);
        }
    });

    $(".list-chk").each(function(){
        let $allChkTag  = $(this).siblings().find('input[name="allChk"]'),
            $chkTag     = $(this).find("input:checkbox"),
            checkLength = $chkTag.length;

        $chkTag.on("change", function(){
            let checkCnt = 0;

            $chkTag.each(function(){
                if( $(this).is(':checked') ){
                    checkCnt++;
                }
            });

            if( checkLength == checkCnt ){
                $allChkTag.prop("checked", true);
            } else {
                $allChkTag.prop("checked", false);
            }
        });
    });
}

function initPage(){
    loadFn();
    resizeFn();
    scrollFn();
}

$(function(){
    initPage();
});