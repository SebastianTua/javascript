class Animal{
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
    }
    verInfo (){
        document.write(this.info + "<br>")
    }
}
    //Ejemplo de herencia//
class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    ladrar(){
        alert("Guauu!")
    }
     // Ejemplo setter //
    set setRaza(newRaza){
        this.raza = newRaza;
    }
     // Ejemplo getter //
    get getRaza(){
        return this.raza;
    }
}
class Gato extends Animal {
    constructor(especie,edad,color,){
        super(especie,edad,color);
    }
    maullar(){
        alert("Miauu!")
    }
}

const perro = new Perro("perro", 5, "blanco","poodle");
const gato = new Gato("gato", 3, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

perro.verInfo();
perro.ladrar();
perro.setRaza = "Golden <br>";
document.write(perro.getRaza)
gato.verInfo();
gato.maullar();
pajaro.verInfo();