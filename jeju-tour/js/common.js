//모바일 메뉴 띄움
$(function(){
    let isOpen = false;  //상태 변수
    $('.openMOgnb').click(function(){  //메뉴를 클릭하면
        if(isOpen == false){
            $('header').addClass('on');
            $('.header_cont').slideDown('fast');
            $('.header_cont .closePop').show();	
            isOpen = true;  //상태 변경
        }else{  //isOpen == true
            $('.header_cont').slideUp('fast');
            $('header').removeClass('on');
            isOpen = false;
        } 	
    });

    //닫기 버튼 클릭
    $('header .header_cont .closePop').click(function(){
        $('.header_cont').slideUp('fast');
        $('header').removeClass('on');
    });
})

//창을 늘리고 줄였을때 메뉴바 설정
$(function(){
    $(window).resize(function() {
        if ( parseInt($('header').css('width')) > 800 ){
            $('.header_cont').show();
        } 
        else{
            $('.header_cont').hide();
        }
    }); 
})