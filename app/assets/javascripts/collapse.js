$(document).ready(function(){
    $('#btn-collapse').on('click', function (){
        var part = $(this).attr('data-part');
        $(part).slideToggle(200);
    });
});