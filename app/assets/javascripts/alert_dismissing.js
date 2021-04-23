$(document).ready(function(){

    $( ".close").click(function(){
        $(".dismiss").fadeOut(200, function() {
            $(this).remove();
        });
    });
});