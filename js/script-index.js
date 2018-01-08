$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();

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
function renderRecipe(recipe) {
  $('title,source.name,source.url').empty(); 
  <div class= "col-md-6" text-center">
  + '">+ '<h3>' + recipesArray[i].title + '</h3>'
  </div>

	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
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

