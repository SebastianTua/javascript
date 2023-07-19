//Fetch//
const getName = async()=>{

    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.innerHTML = resultado.nombre
    document.body.appendChild(div);
}
//Axios//
const getAge = async()=>{

    let resultado = await axios("informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("edad");
    div.innerHTML = resultado.data.edad
    document.body.appendChild(div);
}

document.getElementById('getName').addEventListener("click",getName)
document.getElementById('getAge').addEventListener("click",getAge)