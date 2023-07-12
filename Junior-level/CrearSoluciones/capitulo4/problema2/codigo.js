const obtenerInformacion = (materia) => {
    const materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Rodriguez", "pedro", "juan", "pepito"],
        logica: ["Hernandez", "pedro", "juan", "pepito", "maria"],
        quimica: ["Castillo", "pedro", "juan", "pepito", "cofla", "maria"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia,materias];
    } else {
        return materias
    }
}
const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        Alumnos = informacion[0];
        Alumnos.shift()
        document.write(`El profesor de <b>${informacion[1]}</b>: <b style='color:red'>${profesor}</b><br>
     Los alumnos son: <b style='color:blue'>${Alumnos}</b><br><br>`)
    }
}
const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info)
        }
    }
    return `<b style='color:blue'>${alumno}</b> esta en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b><br><br>
    `;
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("fisica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("maria"))