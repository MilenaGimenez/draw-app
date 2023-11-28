//Guardando el elemento y el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

//Colores
const red = document.getElementById("red"); 
const orange = document.getElementById("orange"); 
const yellow = document.getElementById("yellow"); 

//Agarrar coordenadas del mouse y dibujar cuando este el click pulsado
let initialX;
let initialY;

//Botón de descarga
const btnDescarga = document.getElementById("btn-descargar");


let colorPincel = context.strokeStyle = "#000";
let colorRojo = "#ff0000";
let colorNaranja = "#ffa500";
let colorAmarillo = "#ffff00";

const listaDeColores = [colorRojo, colorNaranja, colorAmarillo]

// const cambiarColor = (color) => {
//     for (let index = 0; index < listaDeColores.length; index++) {
//         // const element = array[index];
//         console.log("prueba")
    
//         color.addEventListener("click", () => {
//             colorPincel = context.strokeStyle = listaDeColores[index];
//             console.log("hice click en un color")        
//         }); 
//     }
// };

red.addEventListener("click", () => {
    colorPincel = context.strokeStyle = colorRojo;
    console.log("hice click en un color")        
});  

orange.addEventListener("click", () => {
    colorPincel = context.strokeStyle = colorNaranja;
    console.log("hice click en un color")        
});   

yellow.addEventListener("click", () => {
    colorPincel = context.strokeStyle = colorAmarillo;
    console.log("hice click en un color")        
});   

//Función para dibujar
const dibujar = (cursorX, cursorY) => {
    //Uso de la api de canvas
    context.beginPath(); //Permite iniciar un nuevo camino de trazo
    context.moveTo(initialX, initialY); //Mover coordenadas iniciales
    context.lineWidth = 20; //Grosor del pincel
    context.strokeStyle = colorPincel; //Color del pincel
    context.lineCap = "round"; //Trazo pincel borde
    context.lineJoin = "round"; //Trazo pincel linea
    context.lineTo(cursorX, cursorY); //Mover el trazo hasta la posición que esta recibiendo
    context.stroke(); //Dibujar el trazo

    //Actualizar ubicación/coordenadas cuando se mueve el mouse
    initialX = cursorX;
    initialY = cursorY;
};

//Capturando los clicks con un evento
const mouseDown = (evento) => {
    initialX = evento.offsetX;
    initialY = evento.offsetY;
    dibujar(initialX, initialY);

    //Evento capturar movimiento del mouse
    mainCanvas.addEventListener("mousemove", mouseMoving);
};

//Movimiento del mouse, cuando se mueva siga dibujando
const mouseMoving = (evento) => {
    dibujar(evento.offsetX, evento.offsetY); //Coordinadas actualizadas mientras se mueve
};

//Al soltar el click, deja de dibujar
const mouseUp = () => {
    mainCanvas.removeEventListener("mousemove", mouseMoving);
};

mainCanvas.addEventListener('mousedown', mouseDown);
mainCanvas.addEventListener('mouseup', mouseUp); //Asociando función de dejar de dibujar


//Descargar imagen:
const descargarImg = () => {
    // let imagen = mainCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    // window.location.href = imagen;
    
    flor = document.createElement('a');
    flor.download = "Sin título";
    flor.href = mainCanvas.toDataURL("image/png");
    flor.click();
};

btnDescarga.addEventListener("click", () => { descargarImg() });