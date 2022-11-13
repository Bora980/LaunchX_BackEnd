let parrafo_Inicial = document.getElementById('parrafoinicial');


/*
TIPOS DE DATOS

var -> Modificable, scope global - NO SE RECOMIENDA
let -> Modificable, scope limitado - RECOMENDADA USAR
const -> CONSTANTE,  no modificable - Scopew global
*/

/*
CASES

PascalCase - Clases - JAVA

camelCase - variables, funciones, atributos. - JavaScript
    variable -> parrafoInicial =
    funvion -> parrafoInicial()
    atibuto -> parrafoInicial

snake_cae - Python, JavaScript
    variables y funciones

CASE - Constantes

*/

parrafo_Inicial.onclick = function() {
    cambiaColorAleatorio(); 
}

function cambiaColorAleatorio() {
    
    const colores = [
        "red",
        "blue",
        "yellow",
        "cian"
    ];

    console.log(colores[Math.floor(Math.random() * colores.length)]);

    parrafo_Inicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}