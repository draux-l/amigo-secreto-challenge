
// Almacenar los amigos en una lista
let amigos = [];

// Funcion Agregar Amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value.trim();
    if (nombreAmigo === ""){
        alert("Por favor, ingrese un nombre valido");
        return;
    }
    
    // Almacena el nombre en la lista
    amigos.push(nombreAmigo);
    
    //Muestra la lista en la pantalla
    mostrarLista();

    // Liampiamos el campoo de texto
    input.value = "";
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

// Funcion sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista esta vacia. Debe agregar nombres antes");
        return;
    }
    
    //Se genera un indice aleatorio con math
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtenemos el nombre del amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //Mostar mensaje en la pantalla
    let resultadoMensaje = document.getElementById("resultado");
    resultadoMensaje.innerHTML = `El amigo secreto es: ${amigoSorteado}.`

    limpiarLista()
}

function limpiarLista(){
    amigos = []; //vaciamos el arreglo
    document.getElementById("listaAmigos").innerHTML = ""; //lim[iamos la lista de la pantalla

}