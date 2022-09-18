var numero = prompt("Insertar valor a evaluar : ", '')

numero = parseInt(numero)
document.getElementById("eleccion").append(numero);
document.getElementById("subtitulo").append("Los numero pares son:");

if (numero % 2 == 0){
    pintar(".")
} else{
    numero = numero - 1 ;
    
    pintar(numero);
}


while(numero > 2){
        pintar(numero - 2 )
        numero = numero - 2
}

function pintar(valor){
    document.getElementById("contenido").append("i = " + valor + ", ");
}

/*
function es_par(){
    var numero = document.getElementById ("numero").value;
    document.write(typeof(numero))
    let i = numero - 1
    while(numero % 2 == 0){
        document.write(i);
        i = i - 1
    }

}*/
/*valor = console.log("inserte numero",'')

valor = parseInt(valor)
document.write(typeof(valor))
document.write("El número elegido es :" + valor)*/
