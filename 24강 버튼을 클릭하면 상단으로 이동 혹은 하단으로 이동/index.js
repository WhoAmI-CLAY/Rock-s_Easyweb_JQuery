$(function(){
    let target = $('.side').find('button')
    
    $(window).scroll(function(){
        if($(this).scrollTop()  == 0){
            $("i").attr("class","fas fa-caret-down")
        }
        else{
            $("i").attr("class","fas fa-caret-up")
        }
    })

    $(target).click(function() {
        if($(window).scrollTop() == 0){
            //맨 아래로 이동하는 코드
            $('html , body').animate({scrollTop:$('.footer_location').offset().top}, 300);
        }
        else{
            //맨 위로 이동하는 코드
            $('html , body').animate({scrollTop:0}, 300);
        } 
    })
})
