$(document).ready(function(){

    $( ".close").click(function(){
        $(".dismiss").fadeOut(300, function() {
            $(this).remove();
        });
    });
});