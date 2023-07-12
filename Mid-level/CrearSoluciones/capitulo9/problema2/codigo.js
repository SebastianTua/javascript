let alumnos = [{
    nombre: "Sebastian Tua",
    email: "sebastian@gmail.com",
    materia: "Fisica 3"
}, {
    nombre: "Jesus Castillo",
    email: "jesuscastillo@gmail.com",
    materia: "Calculo"
}, {
    nombre: "Lucas Hernadez",
    email: "lucashernan@gmail.com",
    materia: "Literatura 2"
}, {
    nombre: "Maria Vargas",
    email: "sebastian@gmail.com",
    materia: "Fisica 1"
}, {
    nombre: "Barbara Rodriguez",
    email: "barbirodriguez@gmail.com",
    materia: "Matematica"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos) {
    datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `        
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="semana 1">Semana 1</option>
            <option value="semana 2">Semana 2</option>
        </select>
    </div>`;
    contenedor.innerHTML += htmlCode
}


boton.addEventListener("click", () => {
    let confirmar = confirm("Realmente quieres confirmar las mesas?");
    if (confirmar) {
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value
        }
    }
})