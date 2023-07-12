const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try {
        prevRes = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRes)) {
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(8,4,prevRes);
    } catch(e){
        resultado = "Sos gracioso?";
        mensaje = "He descubierto que intestate hackear el sitio"
    }
    abrirModal(resultado,mensaje);
})


const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
        case 1: resultado = "No podes ser tan HDP";
            break;
        case 2: resultado = "Sos malisimo para mi materia";
            break;
        case 3: resultado = "No sabes casi nada";
            break;
        case 4: resultado = "Muy mal";
            break;
        case 5: resultado = "Mal";
            break;
        case 6: resultado = "Regular";
            break;
        case 7: resultado = "Bien, pero puede mejorar";
            break;
        case 8: resultado = "Muy BIEN";
            break;
        case 9: resultado = "Exelente";
            break;
        case 10: resultado = "Insuperable hijo de su pinshi madre";
            break;
        default: resultado = null;
    }
    return resultado
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes)/3;
    if (promedio >= 7){
        return "<span class='green'>Aprobado</span>";
    }
    return "<span class='red'>Desaprobado</span>";
}


const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}