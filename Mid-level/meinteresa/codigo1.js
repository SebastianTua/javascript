  //---Primer ejemplo (con callback)---//
// class Persona {
//     constructor(nombre,instagram){
//         this.nombre = nombre;
//         this.instagram = instagram;
//     }
// };

// const data = [
//     ["Lucas Dalto","@SoyDalto"],
//     ["Robert","@Robert0__"],
//     ["Allan Iverson","@Real__Ivers0n"],
//     ["Camila Rodriguez","@C4miiRodriguez"],
//     ["Sebastian Tua","@SebastianTua__"]
// ];

// const personas = [];

// for (let i = 0; i < data.length; i++) {
//     personas[i] = new Persona(data[i][0],data[i][1]);
// }

// const obtenerPersona = (id,cb)=>{
//     if(personas[id] == undefined){
//         cb("No se ha encontrado a la persona")
//     }else{
//         cb(null,personas[id],id)
//     }
// }

// const obtenerInstagram = (id,cb) =>{
//     if(personas[id].instagram == undefined){
//         cb("No se ha encontrado el insta")
//     }else{
//         cb(null,personas[id].instagram)
//     }
// }

// obtenerPersona(0,(err,persona,id)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(persona.nombre);
//         obtenerInstagram(id,(err,instagram)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(instagram);
//             }
//         });
//     }
// })
    //---Segundo ejemplo(con promise)---//

class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Lucas Dalto","@SoyDalto"],
    ["Robert","@Robert0__"],
    ["Allan Iverson","@Real__Ivers0n"],
    ["Camila Rodriguez","@C4miiRodriguez"],
    ["Sebastian Tua","@SebastianTua__"]
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id] == undefined) reject("No se ha encontrado la persona")
        else{resolve(personas[id])}
    })
}

const obtenerInstagram = (id) =>{
    return new Promise((resolve,reject)=>{
        if (personas[id].instagram == undefined) reject("No se ha encontrado el insta")
        else{resolve(personas[id].instagram)}
    })
}

let id = 1;

obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
    console.log(instagram)
}).catch((e)=>{
    console.log(e)
})
