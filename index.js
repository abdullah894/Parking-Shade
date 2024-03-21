$('#open').on('click', function(){
    console.log('trigger');
    $('.nav-items').css("display","flex")
})
$('#close').on('click', function(){
    console.log('trigger');
    $('.nav-items').css("display","none")
})
