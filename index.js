//escuchar click del  boton

const boton = document.getElementById("boton")
boton.addEventListener("click", nombreBicicleta)


//guardar referencia del heading
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

//preguntar y guardar nombre de una bicicleta
function nombreBicicleta(){
    const bicicleta = prompt("ingresa tu bicicleta favorita")
    mostrarBicicleta(bicicleta)
}

//inseetar nombre en los tres puntos
function mostrarBicicleta(bicicleta) {
    h2.textContent = "Excelente!!!"
    h1.textContent = bicicleta
}

