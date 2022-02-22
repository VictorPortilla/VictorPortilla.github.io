function procesarFormulario() {
    var nombre = document.getElementById("nombre").value;
    document.getElementById("salida1").innerHTML = "Gracias, " + nombre + "!";
    document.getElementById("salida2").innerHTML = "Me pondré en contacto.";
}