class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente")
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desintalada correctamente")
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("La app esta abierta")
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("La app esta cerrada")
        }
    }
    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}

app1 = new App("16.000","5 estrellas","900mb");
app2 = new App("1.000","4 estrellas","400mb");
app3 = new App("6.000","4.5 estrellas","100mb");
app4 = new App("23.000","4.8 estrellas","1gb");
app5 = new App("900","5 estrellas","250mb");
app6 = new App("42.000","3.7 estrellas","522mb");
app7 = new App("17","2.9 estrellas","723mb");

//app.instalar();
//app.abrir();
//app.cerrar();
//app.desinstalar();

document.write(`
    ${app1.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
`)