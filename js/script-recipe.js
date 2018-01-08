

var path = window.location.pathname.split("/");
var pagina = path[path.length-1];
if(pagina==='index.html'){
    $('.js-back').hide();
}else if(pagina==='recipe.html'){
    $('.js-menu').hide();
}