$document.ready(function() {

	$('ul.dropdown').hover(
    function(){
        $(this).find('li').slideDown();
    },
    function(){
        $(this).find('li').slideUp();
    });
});