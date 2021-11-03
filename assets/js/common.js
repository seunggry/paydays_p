/* 페이지 로드후 공통 이벤트 */
function loadFn(){
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

//클릭 방지 이벤트
function clickDefaultFn(){
    $('a[href="#"]').click(function(e){
       e.preventDefault();
    });
}

//accordion event
function accordionFn(){
    $('.btn-more').on('click', function(){
        let brief = $(this).siblings('.brief'),
            listLi = $(this).parents('li');

        if( brief.is(':visible') ){
            $('.list li').removeClass('active');
            listLi.addClass('active');
            $(this).text('접기');
        } else{
            listLi.removeClass('active');
            $(this).text('더보기');
        }
    });
}

function accordionTitAreaFn(){
    $('.accordion .tit').on('click', function(){
        let detial = $(this).siblings('.detail');

        $('.accordion .tit').removeClass('active');
        $('.accordion .detail').slideUp();

        if( !detial.is(':visible') ){
            $(this).addClass('active');
            detial.slideDown();
        } else{
            $(this).removeClass('active');
            detial.slideUp();
        }
    });
}

function accordionBtnFn(){
    $('.btn-dropdown').on('click', function(){
        let brief = $(this).parents('.brief'),
            detail = $(this).parents('.brief').siblings('.detail');

        if( !detail.is(':visible') ){
            $(this).addClass('active');
            detail.slideDown();
        } else{
            $(this).removeClass('active');
            detail.slideUp();
        }
    });
}

function agreeChkClickFn(){

    $('.all-chk input[name="allChk"]').on("change", function(){
        let listChk = $(this).parents('.agree-chk').children('.list-chk');

        if( $(this).is(':checked') ){
            listChk.find('input:checkbox').attr("checked", true);
        }else{
            listChk.find('input:checkbox').attr("checked", false);
        }
    });

    $('.list-chk input[type="checkbox"]').on("change", function(){
        let listChkInput = $(this).parents('.list-chk').find('input[type="checkbox"]:checked'),
            listChkIdx = $(this).parents('.list-chk').find('input[type="checkbox"]').length,
            allChkInput  = $(this).parents('.list-chk').siblings('.all-chk').find('input[name="allChk"]');

        allChkInput.attr("checked", false);

        if( listChkInput.length === listChkIdx ){
            allChkInput.attr("checked", true);
        } else {
            allChkInput.attr("checked", false);
        }
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