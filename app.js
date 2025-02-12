// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// declaracion de variables
let inputAmigo= document.getElementById("amigo");
let amigos=[];
let ullistaAmigos = document.getElementById("listaAmigos");
let ulresultado = document.getElementById("resultado");

// funcion para agragar nombres a la lista arreglo
function agregarAmigo(){
    if (inputAmigo.value ==""){
    alert("Por favor, ingrese un nombre");
    
   }
    amigos.push (inputAmigo.value);
    ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    limpiarCajaTexto();
    console.log(typeof(amigos));
     return;  
}
      //funcion para limpiar caja de texto
function limpiarCajaTexto(){
    document.getElementById("amigo").value = "";
return;
}
// funcion para realizar el sorteo aleatorio
function sortearAmigo(){
    let sorteoRandom = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[sorteoRandom];
    ulresultado.innerHTML = `<li>El Amigo Secreto es: ${amigoSecreto}</li>`;
 return;
}