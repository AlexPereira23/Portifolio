/*Função JQuery para scroll suave */

var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

/*verificar se simple-anime existe*/

if(window.SimpleAnime) {
    new SimpleAnime();
}