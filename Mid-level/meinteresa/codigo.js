const button = document.querySelector(".button")
const contenedor = document.querySelector(".contenedor")

button.addEventListener("click",(e)=>{
    alert("Di click en un boton")
    console.log(e)
})
contenedor.addEventListener("click",(e)=>{
    alert("Di click en el contenedor")
    console.log(e)
})
//otra opcion - se puede remover
//button.addEventListener("click",saludar)

//function saludar(){alert("Holaaa")}
