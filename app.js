// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo () {
    // capturar el valor del input
    let nombre = document.getElementById("amigo").value.trim();
    console.log(nombre);
    //validar que el campo no este vacio por medio de alert
    if (nombre === "") {
        alert("El campo no puede estar vacío");
        return;
     // salir de la función si el campo está vacío
    }
        //validar que el nombre no se repita en el array amigos
        if (amigos.includes(nombre)) {
            alert("El amigo ya está en la lista");
            return; // salir de la función si el amigo ya está en la lista
        }
    //actualizar el array amigos con el nombre del amigo
    amigos.push(nombre);
    recorrerArray();
    //eestablecer el campo de texto a vacío
    limpiarCaja();
    
}

function limpiarCaja (){
  document.getElementById("amigo").value = ``;
}

function recorrerArray() {
    //obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    console.log(lista);
    //limpiar la lista antes de agregar los amigos
    lista.innerHTML = "";
    //recorrer el array amigos y agregar cada amigo a la lista por medio de bucle for
    for (let i = 0; i < amigos.length; i++) {
        //crear un elemento li
        let listaNueva = document.createElement("li");
        //asignar el nombre del amigo al elemento li
        listaNueva.textContent = amigos[i];
        //agregar el elemento li a la lista
        lista.appendChild(listaNueva);
        //console.log(listaNueva);
    }
}

//funcion que seleccona un amigo al azar
function sortearAmigo() {
 //veririficar que el array amigos no este vacio
 if (amigos.length === 0) {
    alert("No hay amigos para seleccionar");
    return; // salir de la función si el array está vacío
 }
 //verificar que haya al menos dos elementos en el array amigos
 if (amigos.length < 2) {
    alert("Debe haber al menos dos amigos para Jugar");
    return; // salir de la función si solo hay un amigo
 }
 //seleccionar un amigo al azar
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    console.log(amigoSeleccionado);
    //mostrar el amigo seleccionado actualizando el resultado en document
    document.getElementById("resultado").textContent = `Amigo seleccionado: ${amigoSeleccionado}`;
    

}