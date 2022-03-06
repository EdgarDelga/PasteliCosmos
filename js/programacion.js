$(document).ready(function()
{
    $("input[name=key]").click(function () {    
        alert("La edad seleccionada es: " + $('input:radio[name=key]:checked').val());
        alert("La edad seleccionada es: " + $(this).val());
    });
});
