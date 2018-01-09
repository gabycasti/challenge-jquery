$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();
	renderActivities(activities);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
   //var recipes= recipesArray.highlighted;
   for (var i=0; i<recipesArray.length; i++){
   	if (recipesArray[i].highlighted == true){
   		renderRecipe(recipesArray[i]);
   	}
   }
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

/* 
* Le agrego al div list_recetas con el append todo el contenido de las recetas
* row character son clases
* En href se indica el link a donde apunta el enlace
* Luego otro muestra el link en la pagina

 */
function renderRecipe(recipe) {
 $('.list-recipes').append('<div class="row character">' +
    '<div class= "col-md-6 col-md-push-3 col-md-pull-3 text-center">'+
    '<h3>' + recipe.title + '</h3>' +
    '</div>' +
    '<div class= "col-md-12 text-center">'+
    '<p>Autor: ' + recipe.source.name + '</p>' +
    '</div>' +
    '<div class= "col-md-12 text-center">'+
     '<img src="img/recipes/640x480/' + recipe.name + '.jpg">'+
    '</div>' +
    '</div>')

	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
  for (var i=0; i<activitiesArray.length; i++){
     renderActivities(activitiesArray[i]);

     if (activitiesArray.length > 0){
     	$('#wrapper-message').hide();
     }
  }
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

var path = window.location.pathname.split("/");
var pagina = path[path.length-1];
if(pagina==='index.html'){
    $('.js-back').hide();
}else if(pagina==='recipe.html'){
    $('.js-menu').hide();
}


function printNews(){  
  $('#texto_nuevo').text('NUEVAS RECETAS')
}

