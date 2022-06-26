let pregunta1 = prompt("Que animal macho parecido a un equino da a luz a sus crías?").toLowerCase();
let pregunta2 = prompt("Cual es único mamífero que puede volar?").toLowerCase();
let pregunta3 = parseInt(prompt("en 1912 se hundió el titanic. Hace cuantos años pasó?"));
switch(pregunta1){
    case "caballito de mar":
        alert("Pregunta 1: Correcto!");
        break;
    default :
        alert("Pista 1: está abajo del mar");
        break;
}
switch(pregunta2){
    case "murcielago":
        alert("Pregunta 2: Correcto!");
        break;
    default:
        alert("Pista 2: Puede que batman te ayude");
        break;
}
switch(pregunta3){
    case 110:
        alert("Pregunta 3: Correcto!");
        break;
    default :
        alert("Pista 3: 2022 - 1912 = ?");
        break;
}