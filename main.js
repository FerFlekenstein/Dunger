class Personaje{
    constructor(nombre, clase, raza, vida, imagen){
        this.raza = raza
        this.clase = clase
        this.vida = vida
        this.nombre = nombre
        this.imagen = imagen
    }
}
// por ahora uso let en este array porque lo paso a localStorage
let lista = []

function crearPersonaje(nombre, clase, raza, vida, imagen){
    const nuevoPj = new Personaje(nombre, clase, raza, vida, imagen)
    lista.push(nuevoPj)
}

// creacion de personajes
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
        case "artificiero":
            imagen = "./images/artificiero.jpg"
            break
        case "barbaro":
            imagen = "./images/barbaro.jpg"
            break
        case "bardo":
            imagen = "./images/bardo.jpg"
            break
        case "brujo":
            imagen = "./images/brujo.jpg"
            break
        case "cazadorDeSangre":
            imagen = "./images/cazadorDeSangre.jpg"
            break
        case "druida":
            imagen = "./images/druida.jpg"
            break
        case "clerigo":
            imagen = "./images/clerigo.jpg"
            break
        case "hechicero":
            imagen = "./images/hechicero.jpg"
            break
        case "monje":
            imagen = "./images/monje.jpg"
            break
        case "paladin":
            imagen = "./images/paladin.jpg"
            break
        case "picaro":
            imagen = "./images/picaro.jpg"
            break
        default:
            imagen = "./images/signoDePregunta.webp"
            break
    }
    crearPersonaje(nombre, clase, raza, vida, imagen)
    localStorage.setItem("personajes", JSON.stringify(lista))
    formulario.reset()
})
// creacion de objetos
class Objeto {
    constructor(nombre, descripcion){
        this.nombre = nombre
        this.descripcion = descripcion
    }
}
let inventario = []

// Capto la info de los objetos
let formObjeto = document.getElementById(`formObjeto`)
formObjeto.addEventListener('submit', (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target)
    let objeto = new Objeto(datForm.get('nombre'), datForm.get('descripcion'))
    inventario.push(objeto)
    localStorage.setItem('objetos', JSON.stringify(inventario))
    formObjeto.reset()
})

// mostrar los personajes creados
const mostrarPjs = document.getElementById("mostrarPjs")
const contenedorPj = document.getElementById("contenedorPj")
let listaStorage = JSON.parse(localStorage.getItem("personajes"))
mostrarPjs.addEventListener("click", () => {
    contenedorPj.innerHTML = ``
    listaStorage.forEach((personaje, indice) => {
        contenedorPj.innerHTML +=`
        <div class="card text-dark" style="width: 18rem;" id="carta${indice}">
            <div class="row align-items-end">
            <p class="col-2 rounded-circle bg-danger p-2 text-dark bg-opacity-50 text-center">
            ${personaje.vida}
            </p>
            <button>Eliminar</button>
            </div>
            <img src=${personaje.imagen} class="card-img-top" alt="es un ${personaje.clase}">
            <div class="card-body">
                <h5 class="card-title text-center">${personaje.nombre}</h5>
                <p class="card-text">${personaje.raza}</p>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample${indice}" aria-expanded="false" aria-controls="multiCollapseExample${indice}" id="inventario${indice}">Ver inventario</button>
                <div class="row" id="multiCollapseExample${indice}">
                </div>
            </div>
         </div>
        `
    })
    // boton para eliminar personajes
    listaStorage.forEach((personaje, indice) => {
        let botonEliminar = document.getElementById(`carta${indice}`).firstElementChild.lastElementChild
        botonEliminar.addEventListener('click', () => {
            document.getElementById(`carta${indice}`).remove()
            lista.splice(indice,1)
            localStorage.setItem('personajes', JSON.stringify(lista))
        })
    })

    // mostrando inventario de cada personaje   
    listaStorage.forEach((personaje, indice) => {
        let inventarioStorage = JSON.parse(localStorage.getItem(`objetos`))
        let mostrarInventario = document.getElementById(`inventario${indice}`)
        let contenedorInventario = document.getElementById(`multiCollapseExample${indice}`)
        mostrarInventario.addEventListener("click", () =>{
            contenedorInventario.innerHTML = `<h3>Inventario de ${personaje.nombre}</h3>`
            inventarioStorage.forEach((item) =>{
                contenedorInventario.innerHTML +=`
                <div class="card card-body col text-dark row" id="objeto${indice}">
                    <button class="btn btn-danger text-white col-md-2">X</button>
                    <h5 class="card-title text-center col-md-5">${item.nombre}</h5>
                    <p class="card-text col-md-8">${item.descripcion}</p>
                </div>
                `
            })
        })
        // eliminar objetos de inventario
        /*inventarioStorage.forEach((objeto, indice) => {
            let botonObjeto = document.getElementById(`objeto${indice}`).firstElementChild
            botonObjeto.addEventListener('click', () => {
                document.getElementById(`objeto${indice}`).remove()
                inventario.splice(indice,1)
                localStorage.setItem('objetos', JSON.stringify(inventario))
            })
        })*/
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