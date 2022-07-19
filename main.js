class Personaje{
    constructor(nombre, clase, raza, vida){
        this.raza = raza
        this.clase = clase
        this.vida = vida
        this.nombre = nombre
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

function crearPersonaje(nombre, clase, raza, vida){
    const nuevoPj = new Personaje(nombre, clase, raza, vida)
    lista.push(nuevoPj)
}
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    let nombre = document.getElementById("nombrePJ").value
    let clase = document.getElementById("clasesPj").value
    let raza = document.getElementById("razaPj").value
    let vida = document.getElementById("vidaPj").value
    crearPersonaje(nombre, clase, raza, vida)
    formulario.reset()
})
const mostrarPjs = document.getElementById("mostrarPjs")
const contenedorPj = document.getElementById("contenedorPj")
mostrarPjs.addEventListener("click", () => {
    lista.forEach(personaje => {
        contenedorPj.innerHTML +=`
        <div class="card" style="width: 18rem;">
            <div class="row align-items-end">
            <p class="col-2 rounded-circle bg-success p-2 text-dark bg-opacity-50 text-center">
            ${personaje.vida}
            </p>
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">${personaje.nombre}</h5>
                <p class="card-text">${personaje.raza}</p>
            </div>
        </div>
        `
    })   
})
