let costo1, costo2, operacion, total;

function suma(num1, num2){
    return num1 + num2;
}

function resta(total, num1){
    return total - num1;
}

let pregunta = prompt("Tenes un costo total? elige `Si` o `No`").toLowerCase();

if (pregunta == "si"){
    do{
        total = parseFloat(prompt("Ingrese su costo total"));
        costo1 = parseFloat(prompt("Ingrese el precio de un producto que desee añadir"));
        operacion = prompt("Quieres `sumar` o `restar`?").toLowerCase();
        if (isNaN(costo1) || isNaN(total)){
            alert("Por favor, unicamente ingrese numeros");
        }
    }while(isNaN(total) || isNaN(costo1))

    switch (operacion){
        case "sumar":
            alert("Su nuevo costo total es de: " + suma(total, costo1));
            break;
        case "restar":
            alert("Su nuevo costo total es de: " + resta(total, costo1));
            break;
        default:
        alert("Por favor escriba la palabra `sumar` o `restar` según su caso");
        break;
    }
}
else if (pregunta == "no"){
    do{
        costo1 = parseFloat(prompt("Ingrese un costo de un producto"));
        costo2 = parseFloat(prompt("Ingrese un costo de un producto"));
        if (isNaN(costo1) || isNaN(costo2)){
            alert("Por favor, unicamente ingrese números");
        }
    }while(isNaN(costo1) || isNaN(costo2))
    alert(`El costo total de sus productos seleccionados es: ` + suma(costo1, costo2));

}else{
    alert("Por favor, escriba `Si` o `No` según corresponda");
}