let vidasobreviviente = 100;
let vidazombie = 40;

let encuentro = 0

let sobreviviente = prompt("escribe tu nombre");

let arma = Number(prompt("elige tu arma: escribe 1 para usar machete, 2 para usar pistola   "));



function inicio(){
    let sobreviviente = prompt("escribe tu nombre  ");
    return console.log("Usted Eligio   " + sobreviviente)
}

switch(arma){
    case 1:
    console.log("Elegiste Machete, tiene mas chance de acertar pero tiene un solo golpe ")
    break;
    case 2:
    console.log("Elegiste Pistola, tiene menos chance de acertar pero golpea 2 veces " )
    break;
    default:
        console.log("No Elegiste Arma ")
}

function desarmado(){
    if (arma>2){
        return console.log("Moriste");
    }
}




function continua(){
    return (vidasobreviviente > 0 ) && (vidazombie > 0)
}

function ganador(){
    return vidasobreviviente = 0
}


function golpeAcertadoMachete() {
    const aciertomachete = Math.round(Math.random() * 5);
    console.log(aciertomachete)
    return aciertomachete >= 2;
    
}


function golpeAcertadoPistola() {
    const aciertopistola = Math.round(Math.random() * 5);
    console.log(aciertopistola)
    return aciertopistola >= 3;
    
}

while(continua()){

    console.log( sobreviviente + "   APARECE UN ZOMBIE !!!!"  +"CON VIDA =" + vidazombie);

    function pelea() {
        if (arma === 1) {
            return dsobrevivientemachete();
        } else if (arma === 2) {
            return dsobrevivientepistola();}
            else {
                return desarmado();
            
    
            }
    }


function dsobrevivientemachete(){
    if (golpeAcertadoMachete()){
      (vidazombie -= 20)
      return console.log( "Acertaste el golpe con el machete y " + "La Vida Del ZOMBIE ES =" + vidazombie);
    }
    else{
    vidasobreviviente -= 20;
        return console.log("Fallaste el golpe y el ZOMBIE te golpeo Y TU VIDA QUEDO EN ----> " + vidasobreviviente );
    }
}

    

function dsobrevivientepistola(){
    if (golpeAcertadoPistola()) {
       (vidazombie -= 40)
       return console.log("BANG BANG , le diste 2 disparos en la cabeza " + vidazombie )
    }
    else{
       (vidasobreviviente -= 20);
       return console.log("Fallaste los disparos y " + "TU VIDA ES ---->" + vidasobreviviente)
    }
} 


let resultadoPelea = pelea();


}

function ganador() {
    if (vidazombie <= 0) {
        return "Asesino de Zombies ---->  " + sobreviviente ;
    } else if (vidasobreviviente <= 0) {
        return "HAS MUERTO  " + sobreviviente ;
    } else {
        return "La PELEA continua " + "Vida del ZOMBIE ---> " + vidazombie + ", Tu vida: " + vidasobreviviente;
   
 }

}



let resultadoFinal = ganador();

console.log(resultadoFinal);

