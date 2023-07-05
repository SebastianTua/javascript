// Array asociativo

let pc = {
    nombre: "SebasPC",
    procesador: "Intel core I5",
    ram: "16Gb",
    espacio: "1Tb"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria es: <b>${ram}</b> <br>
         el espacio en disco es: <b>${espacio}</b>`;

document.write(frase);