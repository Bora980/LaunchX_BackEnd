console.log("Hola mundo");

let nombres = {
    nombre: "Jesús",
    apellido: "Guzmán"
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));

console.log(nombres);

function perro(nombre, edad){
    let perro = Object.create(ObjetoConstructor);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}

let ObjetoConstructor = {
    habla: function() {
        return "Wof Wof Soy un perro";
    }
}

let firulais = perro("firulais", 9);
console.log(firulais);
console.log(firulais.habla);