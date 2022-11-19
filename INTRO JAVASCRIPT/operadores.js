let lista = [];

let x = 5;
let y = 10;

// Asignación de adición

x += y // Es exactamente lo mismo que hace esto: x = x + y
x += y

lista.push(x);
console.log(lista)
console.log(x)

// Asignación de resta

y -= x

lista.push(y);
console.log(y)

// Asignación de multiplicación

x *= y

console.log("X = " + x)

x = 5;
y = 10;

// Operador de bit a bit de desplazamiento a la izquierda

x <<= y;

lista.push(x);
console.log(x)

// Asignación de módulo o resudio

x = 5;
y = 11;

lista.push(y % x);
console.log(y % x)

y %= x

lista.push(y);
console.log("Y = " + y)

// Estructura de control if
let var1 = 3;
let var2 = 4;

// Operador igual
if (var1 == var2){
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

// Operador estictamente igual

if (var1 === var2){
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

// Operador de desigualdad

if (var1 != var2){
    console.log("Son diferentes");
} else {
    console.log("No son diferentes");
}

// Operador de desigualdad estricta

if (var1 !== 4){
    console.log("Son diferentes");
} else {
    console.log("No son diferentes");
}

// > Mayor que
console.log(var1 > var2);

// < Menor que
console.log(var1 < var2);
console.log(23 < 23);

// Menor o igual que
console.log(23 <= 23);

// Mayor o igual que
console.log(23 >= 23);

