let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es: ${alto}, El ancho es: ${ancho}`)

if(comprar){
    alert("Compra realizada exitosamente");
}else{
    alert("Compra cancelada");
}