let peticion

if (window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
}else{
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201) respuesta = peticion.response
    else respuesta = "Lo siento no se ha encontrado el recurso"
    console.log(JSON.parse(respuesta))
})

peticion.open("POST","https://reqres.in/api/users")
peticion.send(JSON.stringify({
    "nombre": "dalto",
    "trabajo": "edutuber"
}))