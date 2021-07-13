/* 가장 인접한 하위요소만을 선택해서 색상을 변경한다.*/
$('.box').find('> li').css({"color":"red"})
/* 모든 하위요소의 색상을 변경한다.*/
$('.box1').find('li').css({"color":"red"})