let encabezados = "";
window.onclick = function() {
    // Me crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("¿Quieres ser mi morrita?");
    
    encabezados.appendChild(text);
    document.body.appendChild(encabezados);

    
}

// Tipos de datos en JavaScript

let variable = 42  //Número entero o int number
console.log(typeof variable);
variable = "42";
console.log(typeof variable);
variable = 42;
console.log(variable + variable);
variable = !true; // booleano
console.log(typeof variable); // ! se llama operador
console.log(variable);


