$(function(){
    //btn_mobile 클릭 시 gnb_area 왼쪽에서 등장
    $('.btn_mobile').click(function(){
        $('.gnb_area').animate({
            left: 0
        }, 500)
        $('.m_gnb_bg').animate({
            opacity: 1,
        })
        $('.m_gnb_bg').addClass('on')
        
    })
    //close 클릭 시 gnb_area 사라짐
    $('.close').click(function(){
        $('.gnb_area').animate({
            left:'-100%'
        }, 500)
        $('.m_gnb_bg').animate({
            opacity: 0
        })
        setTimeout(function(){
            $('.m_gnb_bg').removeClass('on')
        },500)
        
    })

    //header
    $('header').each(function(){
        const $win = $(window),
              $header = $(this);
        let wrapHeight = $header.offset().top + $header.outerHeight();

        $win.on('scroll', function(){
            if($win.scrollTop() > wrapHeight){
                $header.addClass('on'),
                $('.call_btn').addClass('on')
            }else{
                $header.removeClass('on'),
                $('.call_btn').removeClass('on')
            }
        })
    })
});
