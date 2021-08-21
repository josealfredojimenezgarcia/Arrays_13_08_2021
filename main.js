
let generar = ()=> Math.trunc(Math.random()*10);
let lista = new Array(20).fill(null);
for(let i in lista){
    lista[i] = generar();
}
lista = ["A","B","C","D","E","F"];
lista.splice(-1,0,"Innovación")
console.log(lista);


// ENCONTRAR ELEMENTOS DE UN ARRAY
const array2 = [5, 12, 8, 13, 25];
for (let i = 0; i < array2.length; i++) {

const found = array2.find(element => element > 13);

console.log(found);
}

//  METODO FILTER
const words = ['Platano', 'ñame', 'maduro', 'berenjena', 'guanábana', 'maracuya'];

const result = words.filter(word => word.length > 7);

console.log(result);
// expected output: Array [ "berenjena", "guanabana", "maracuya"]


// METODO REVERSE
const array1 = ['Primero ', 'Segundo', 'Tercero','Cuarto', 'Quinto'];
console.log('array_Ascendente:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const desendente = array1.reverse();
console.log('Array Desendiente:', desendente);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

// console.log(lista);
// console.log(lista.slice(1,-2));

// console.log(-(lista.length-1));

// nombre = 