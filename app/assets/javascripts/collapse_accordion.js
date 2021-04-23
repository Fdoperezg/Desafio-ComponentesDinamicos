$(document).ready(function(){
    $('Egofaccordion').on('click', 'button', function (){
        var part = $(this).attr('data-part');
        $(part).slideToggle(200)
    })
})