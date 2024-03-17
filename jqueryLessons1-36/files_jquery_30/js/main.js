$(function (){
    $('.small a').click(function (e){
        $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000)
        e.preventDefault()fd
    })
})