let tijera = "tijera";
let piedra = "piedra";
let papel = "papel";

let obtener = function( ) {

    let accion = document.getElementById("accion").value;
    let accion2 = document.getElementById("accion2").value;

    if (accion === accion2) {
        console.log("Empate");
    
    }
    if (accion === papel && accion2 === piedra) {
        console.log("Gana usuario 1");
    }
    if (accion == papel && accion2 == tijera) {
        console.log("Gana el usuario 2");
    }
    if (accion === tijera && accion2 === piedra) {
        console.log("Gana usuario 2");
    }
    if (accion === tijera && accion2 === papel) {
        console.log("Gana el usuario 1");
    }
    if (accion == piedra && accion2 == papel) {
        console.log("Gana el usuario 2");
    }
    if (accion == piedra && accion2 == tijera) {
        console.log("Gana el usuario 1");
    }
    
}