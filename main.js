const lista = []
class Personaje{
    constructor(raza, clase, vida, nombre){
        this.raza = raza
        this.clase = clase
        this.vida = vida
        this.nombre = nombre
    }
}
// el usuario crea obj
let acumulador;
do{
    acumulador = parseInt(prompt("Cuantos personajes hay en su partida?"))
}while(isNaN(acumulador))

let raza, clase, vida, nombre;
for (let contador = 1; contador <= acumulador; contador++){
    raza = prompt(`Cual es la raza de su personaje?`).toLowerCase()
    clase = prompt("De que clase es?").toLowerCase()
    do{
        vida = parseInt(prompt("Cuantos puntos de vida tiene?"))
        if (isNaN(vida)){
            alert("Ingrese numeros unicamente")
        }
    }while(isNaN(vida))
    nombre = prompt(`Cual es su nombre?`)
    const nuevoPj = new Personaje(raza, clase, vida, nombre)
    lista.push(nuevoPj)
}
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
    console.log(lista.filter(nuevoPj => nuevoPj.raza == prompt("Buscar por raza.").toLowerCase()))
}else{
    alert("No existe esa opción. Inténtelo nuevamente.")
}


