    //Programacion Orientada a Objetos//
class Celular{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    precionarBotonEncendido(){
        if(this.encendido == false){
            alert("Celular encendido");
            this.encendido = true;
        }else{
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular");
        }else{
            alert("El celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Tamaño: <b>${this.tamaño}</b> <br>
        Resolucion de Camara: <b>${this.resolucionDeCamara}</b> <br>
        Memoria Ram: <b>${this.memoriaRam}</b> <br>
        `;
    }
}



celular1 = new Celular("azul","150g","5","Hd","1Gb");
celular2 = new Celular("blanco","155g","5.4","Full-hd","2Gb");
celular3 = new Celular("negro","146g","5.9","Full-hd","2Gb");


//celular1.precionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.precionarBotonEncendido();


document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()}<br>
`);