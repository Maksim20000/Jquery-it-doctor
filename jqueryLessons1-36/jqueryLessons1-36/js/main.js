$(function(){
   let ob = $('.arrowDown ')
   ob.click(function (e){
      let ans = confirm('Вы хотите отправить данные?')
      if(!ans){
         e.preventDefault()
      }
   })

});
