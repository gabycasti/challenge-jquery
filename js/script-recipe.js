$(document).ready( function(){

   $('#btn-secondary js-show-recipe').click(function(){
      ('#btn-secondary js-show-recipe').addClass('active');
      ('#btn-secondary js-show-make').removeClass('active');
   });


   $('#btn-secondary js-show-make').click(function(){
      ('#btn-secondary js-show-recipe').removeClass('active');
      ('#btn-secondary js-show-make').addClass('active');
   });

});

