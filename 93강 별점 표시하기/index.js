$(function(){
    let target  =  $('div').attr('data-rate')
    let star_load = $('div i')
    for(let i = 0; i < parseInt(target); i++){
        $(star_load[i]).css({"color":"pink"})
    }


    $('select').change(function(){
        //$(this).val() 선택한 값의 value를 가져온다.
        star_load = $('ul i')
        $(star_load).css({"color":"black"})   //이전에 기록으로 인해 한번 초기화 한다. 모르면 여기 지우고 해보기
        for(let i = 0; i< $(this).val(); i++){
            $(star_load[i]).css({"color":"red"})
        }
    })
    
})