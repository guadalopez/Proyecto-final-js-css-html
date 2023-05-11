//botones video

let videoHistoria=document.querySelector("#video-historia");

const reproducir=()=>{
    videoHistoria.play();
    document.querySelector("#duracion-video").textContent= videoHistoria.duration.toFixed(2);
}

const pausar=()=>{
    videoHistoria.pause();
}

//juego rompecabezas

const inicioArraste =(evento)=>{
    let infoImagen=evento.target.src;
    evento.dataTransfer.setData("text",infoImagen);
}

const prevenirDefault=(evento)=>{
    evento.preventDefault();
}

const soltarCubo =(evento)=>{

    let dataObtenida=evento.dataTransfer.getData("text");
    evento.target.innerHTML=`
    <img src= ${dataObtenida} alt="imagen del rompecabezas" height="400px" width="275px"/>
    `
}

const soltarImagen = (evento, targetId) =>{
    evento.target.style.display = "none";
}

const reiniciarJuego =(event)=>{
    location.reload()
}