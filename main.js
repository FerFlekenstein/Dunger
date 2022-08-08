class Personaje{
    constructor(nombre = "", clase, raza, vida, imagen){
        this.raza = raza
        this.clase = clase
        this.vida = vida
        this.nombre = nombre
        this.imagen = imagen
        this.inventario = []
    }
}
class Objeto {
    constructor(nombre, descripcion){
        this.nombre = nombre
        this.descripcion = descripcion
    }
}
function crearPersonaje(nombre, clase, raza, vida, imagen){
    const nuevoPj = new Personaje(nombre, clase, raza, vida, imagen)
    lista.push(nuevoPj)
}
// creacion de personajes y su array
const lista = JSON.parse(localStorage.getItem("personajes"))?? []
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
    if(nombre == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Necesita un nombre',
            toast: true,
            position: 'top-end'
          })
    }else{
        crearPersonaje(nombre, clase, raza, vida, imagen)
        localStorage.setItem("personajes", JSON.stringify(lista))
        formulario.reset()
    }
 })
// boton mostrar personajes creados
const mostrarPjs = document.getElementById("mostrarPjs")
const contenedorPj = document.getElementById("multiCollapseExample0")
mostrarPjs.addEventListener("click", () => {
    contenedorPj.innerHTML = ``
    lista.forEach((personaje, indice) => {
        contenedorPj.innerHTML +=`
        <div class="card text-dark m-3" style="width: 18rem;" id="carta${indice}">
            <div class="row justify-content-end">
                <button class="btn btn-danger col-2 align-self-end mb-2">X</button>
            </div>
            <img src=${personaje.imagen} class="card-img-top" alt="es un ${personaje.clase}">
            <div class="card-body text-center">
                <div class="row">
                    <div class="col-2 text-danger m-0 p-0">
                        <p class="text-center d-inline">${personaje.vida}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                        </p>
                    </div>
                    <h5 class="card-title col-8 ">${personaje.nombre}</h5>
                </div>
                <p class="card-text">${personaje.raza}</p>

                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1${indice}" aria-expanded="false" aria-controls="multiCollapseExample1${indice}" id="form${indice}">+</button>

                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2${indice}" aria-expanded="false" aria-controls="multiCollapseExample2${indice}" id="inventario${indice}">Ver inventario</button>

                <div class="collapse multi-collapse row" id="multiCollapseExample1${indice}">
                </div>

                <div class="collapse multi-collapse row" id="multiCollapseExample2${indice}">
                </div>
            </div>
         </div>
        `
    })
    // boton eliminar personajes
    lista.forEach((personaje, indice) => {
        let botonEliminar = document.getElementById(`carta${indice}`).firstElementChild.lastElementChild
        botonEliminar.addEventListener('click', () => {
            document.getElementById(`carta${indice}`).remove()
            lista.splice(indice, 1)
            localStorage.setItem('personajes', JSON.stringify(lista))
        })
    })
    // boton mostrar form objetos
    lista.forEach((personaje, indice) => {
        let botonFormObjeto = document.getElementById(`form${indice}`)
        let contFormObjeto = document.getElementById(`multiCollapseExample1${indice}`)
        botonFormObjeto.addEventListener("click", () =>{
            contFormObjeto.innerHTML = ""
            contFormObjeto.innerHTML += `
            <form id="formObjeto${indice}">
                <div class="mb-3">
                    <label for="nombreItem" class="form-label">Nombre del objeto</label>
                    <input required type="input" class="form-control" id="nombreObjeto" name="nombre">
                </div>
                <div class="mb-3">
                    <label for="descripcion" class="form-label">Descripción</label>
                    <input type="input" class="form-control" id="descripcion" name="descripcion">
                </div>
                <button type="submit" class="btn btn-primary mt-2">Añadir objeto</button>
            </form>
            `
            // boton crear objetos
            let formObjeto = document.getElementById(`formObjeto${indice}`)
            formObjeto.addEventListener('submit', (event) => {
                event.preventDefault()
                let nombreObjeto = document.getElementById("nombreObjeto").value
                let descripcion = document.getElementById("descripcion").value
                const nuevoObjeto = new Objeto(nombreObjeto, descripcion)
                personaje.inventario.push(nuevoObjeto)
                localStorage.setItem(`objetos${indice}`, JSON.stringify(personaje.inventario))
                formObjeto.reset()
            })
        })
    })
    // boton mostrar inventario de cada personaje 
    lista.forEach((personaje, indice) => {
        const inventarioStorage = JSON.parse(localStorage.getItem(`objetos${indice}`)) ?? []
        let mostrarInventario = document.getElementById(`inventario${indice}`)
        let contenedorInventario = document.getElementById(`multiCollapseExample2${indice}`)
        mostrarInventario.addEventListener("click", () =>{
            contenedorInventario.innerHTML = ``
            inventarioStorage.forEach((item, indice) =>{
                contenedorInventario.innerHTML +=`
                <div class="card card-body col text-dark row text-center m-0 p-0" id="item${indice}">
                    <div class="row justify-content-start m-0 p-0">
                        <h5 class="card-title text-center col-10">${item.nombre}</h5>
                        <button class="btn btn-danger text-white col-2 align-self-end">X</button>
                    </div>
                    <p class="card-text">${item.descripcion}</p>
                </div>
                `
            })
            // boton eliminar objetos de inventario
            inventarioStorage.forEach((objeto, indice) => {
            let botonObjeto = document.getElementById(`item${indice}`).firstElementChild.lastElementChild
            botonObjeto.addEventListener('click', () => {
                document.getElementById(`item${indice}`).remove()
                personaje.inventario.splice(indice, 1)
                localStorage.setItem(`objetos${indice}`, JSON.stringify(personaje.inventario))
                })
            })
        })
    })
})
// Modo noche/dia
const modoClaro = document.getElementById("modoClaro")
const modoOscuro = document.getElementById("modoOscuro")
let oscuro
(localStorage.getItem("tema"))? oscuro = localStorage.getItem("tema") : localStorage.setItem("tema", "claro")

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
// dado
const divDado = document.getElementById("divDado")
const resultado = document.getElementById("resultado")
let giro
function giroDado(numero){
    giro = Math.round((Math.random() * numero))
    return giro
}
divDado.addEventListener("click", (e) => {
    if(e.target && e.target.tagName === "DIV" ){
        
    }else{
        let dado = e.target.textContent
        giroDado(dado)
        console.log(e.target)
        Swal.fire({
            title: `Tu tirada es:`,
            text: `${giro}`,
            width: 300,
            padding: '1em',
            color: '#716add',
          })
    }
})