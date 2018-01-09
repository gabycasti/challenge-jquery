$(document).ready( function(){
 // Creando documento 
   $('#btn-secondary js-show-recipe').click(function(){
      ('#btn-secondary js-show-recipe').addClass('active');
      ('#btn-secondary js-show-make').removeClass('active');
   });


   $('#btn-secondary js-show-make').click(function(){
      ('#btn-secondary js-show-recipe').removeClass('active');
      ('#btn-secondary js-show-make').addClass('active');
   });


$('.icon-arrow-left-alt').click(function(){
	document.location.replace('index.html');
})

});

