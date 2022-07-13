class Character{
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

function makeCharacter(nombre, clase, raza, vida){
    const newCharacter = new Character(nombre, clase, raza, vida)
    lista.push(newCharacter)
}

function validadorNum (mensaje = "", num = 0){
    do{
        num = parseInt(prompt(`${mensaje}`))
    }while(isNaN(num))
}
// el usuario crea obj
let nombre, clase, raza, vida, cut
do{
    nombre = prompt("Cual es el nombre de su personaje?").toLowerCase()
    clase = prompt(`Cual es la clase de ${nombre}`).toLowerCase()
    raza = prompt(`Cual es la raza de ${nombre}?`).toLowerCase()
    validadorNum(`Cuantos puntos de vida tiene ${nombre}`, vida)
    makeCharacter(nombre, clase, raza, vida)
    cut = prompt("Quiere agregar mas personajes?").toLowerCase()
}while(cut !== "no")

// interaccion usuario-array de obj
let opciones;
do{
    opciones = parseInt(prompt(`Presione:
    1- Ordenar de mayor a menor segun sus puntos de vida.
    2- Filtrar por razas.`))
}while(isNaN(opciones) || opciones < 1 || opciones > 2)
if (opciones == 1){
    console.log(lista.sort((a, b) => b.vida - a.vida))
}else if (opciones == 2){ 
    let guardar = prompt("Buscar por raza.").toLowerCase()
    console.log(lista.filter(personaje => personaje.raza == guardar))
}else{
    alert("No existe esa opción. Inténtelo nuevamente.")
}
