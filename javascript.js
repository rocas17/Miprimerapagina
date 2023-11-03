alert("Hola este es mi Javascript");

// let nombre = "robinson";
// nombre = "nicolas";

// var nombre1 = "robinson";

//const nombre2 = "robinson";
// //nombre2 = "nicolas";

// console.log (nombre);
// console.log (nombre1);
// console.log (nombre2);

// seleccionar elementos

let contenidoTitulo = "nombre";

let titulo = document.querySelector(".logo .fuente")
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre"){
    titulo.innerHTML = "Otro";
} else{
    console.log("no se cumple")
}

//FUNCIONES

let nombre = "robin";
let gusta = "sistemas";

let parrafo = documet.queryselector(".parrafo2");
let contenido = 'soy ${nombre} y me gusta mucho el tema de los ${gusto} y la programacion por lo cual deseo aprender nuevas cosas para asi aprender y adquirir nuevos conocimientos'

function nombredelafuncio(nombre, gusto){
    return contenido;
}
