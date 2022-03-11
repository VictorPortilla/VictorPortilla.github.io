function procesarFormulario(){
    var peso = $("#peso").val();
    var estatura = $("#estatura").val();

    var imc = peso/(estatura*estatura);

    var mensaje;
    var color;
    var url;

    if(imc <=18.5)
    {
        mensaje = "Bajo de peso";
        color = "#0095ef";
        url = 'url("icon1.png")';
    }
    else if(imc <= 24.9)
    {
        mensaje = "Peso saludable";
        color = "#3c50b1";
        url = 'url("icon2.png")';
    }
    else if(imc <= 29.9)
    {
        mensaje = "Sobrepeso";
        color = "#6a38b3";
        url = 'url("icon3.png")';
    }
    else if(imc <= 34.9)
    {
        mensaje = "Obesidad de grado 1";
        color = "#a224ad";
        url = 'url("icon4.png")';
    }
    else if(imc <= 39.9)
    {
        mensaje = "Obesidad de grado 2";
        color = "#f31d64";
        url = 'url("icon5.png")';
    }
    else if(imc >= 40)
    {
        mensaje = "Obesidad mórbida";
        color = "#fe433c";
        url = 'url("icon6.png")';
    }
    else
    {
        mensaje = "Los datos ingresados no son válidos";
    }

    
    $("#imc").text(imc.toFixed(2));
    $("#estado").text(mensaje);

    $(".body").css("background-color", color);

    $("#imagen").css('content', url)

    /*
    IMC menor o igual a 18,5 – se considera bajo de peso.

    IMC entre 18,5 y 24,9 – se considera peso saludable.

    IMC entre 25 y 29,9 – se considera sobrepeso.

    IMC entre 30 y 34,9 – se considera obesidad de grado 1

    IMC entre 35 y 39,9 – se considera obesidad de grado 2

    IMC igual o superior a 40 – se considera obesidad mórbida.

    
    alert("Hey");
    var mensaje = "Gracias, " + nombre +" , proto me pondré en contacto contigo";
    $("#salida1").text(mensaje);*/
}

$(function(){
    $("#accordion").accordion();
});