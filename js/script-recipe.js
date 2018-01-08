$(document).ready( function(){

   $('#btn-secondary js-show-recipe').on('click',function(){
      ('#btn-secondary js-show-recipe').addClass('active');
      ('#btn-secondary js-show-make').removeClass('active');
   });


   $('#btn-secondary js-show-make').on('click',function(){
      ('#btn-secondary js-show-recipe').removeClass('active');
      ('#btn-secondary js-show-make').addClass('active');
   });

});

