class Personaje{
    constructor(nombre, clase, raza, vida, imagen){
        this.raza = raza
        this.clase = clase
        this.vida = vida
        this.nombre = nombre
        this.imagen = imagen
    }
    aumtentarVida (aumento){
        this.vida += aumento
    }
    reducirVida (reduccion){
        this.vida -= reduccion
    }
}
const lista = []

let nombre, clase, raza, vida, imagen

function crearPersonaje(nombre, clase, raza, vida, imagen){
    const nuevoPj = new Personaje(nombre, clase, raza, vida, imagen)
    lista.push(nuevoPj)
}
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    let nombre = document.getElementById("nombrePJ").value
    let clase = document.getElementById("clasesPj").value
    let raza = document.getElementById("razaPj").value
    let vida = document.getElementById("vidaPj").value
    switch(clase){
        case "mago":
            imagen = "./images/mago.jpg"
            break
        case "guerrero":
            imagen = "./images/guerrero.jpg"
            break
        case "arquero":
            imagen = "./images/arquero.jpg"
            break
        default:
            console.log("error imagenes")
            break
    }
    crearPersonaje(nombre, clase, raza, vida, imagen)
    formulario.reset()
})

const mostrarPjs = document.getElementById("mostrarPjs")
const contenedorPj = document.getElementById("contenedorPj")
mostrarPjs.addEventListener("click", () => {
    contenedorPj.innerHTML = ``
    lista.forEach(personaje => {
        contenedorPj.innerHTML +=`
        <div class="card text-dark" style="width: 18rem;">
            <div class="row align-items-end">
            <p class="col-2 rounded-circle bg-danger p-2 text-dark bg-opacity-50 text-center">
            ${personaje.vida}
            </p>
            </div>
            <img src=${personaje.imagen} id="imagenCartas" class="card-img-top" alt="gatito ${personaje.clase}">
            <div class="card-body">
                <h5 class="card-title text-center">${personaje.nombre}</h5>
                <p class="card-text">${personaje.raza}</p>
            </div>
        </div>
        `
    })   
})
// Modo noche/dia
const modoClaro = document.getElementById("modoClaro")
const modoOscuro = document.getElementById("modoOscuro")
let oscuro

if(localStorage.getItem("tema")){
    oscuro = localStorage.getItem("tema")
}else{
    localStorage.setItem("tema", "claro")
}

if(oscuro == "oscuro"){
    document.body.classList.add("modoOscuro")
}

modoOscuro.addEventListener("click", () =>{
    document.body.classList.add("modoOscuro")
    localStorage.setItem("tema", "oscuro")
})
modoClaro.addEventListener("click", () =>{
    document.body.classList.remove("modoOscuro")
    localStorage.setItem("tema", "claro")
})