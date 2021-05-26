$(function() { 
    

    // addClass('a b') , removeClass('a') 
    // toggleClass('a') : 해당 클래스가 있으면 삭제하고 해당 클래스가 없으면 생성한다.
    // hasClass('a') : 조건문에서만 사용 (해당 클래스가 있으면 true 없으면 false)
 
    $("aside").find('button').click(function() { 
        $("aside").toggleClass('open')
        if($("aside").hasClass('open')){
            $("aside").animate({left : "0px"}, 300 )
            $("aside").find('button').text("CLOSE")
        }
        else{
            $("aside").animate({left : "-350px"}, 300)
            $("aside").find('button').text("OPEN")
        }
    })    

})
