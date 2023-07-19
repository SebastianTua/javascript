      //GET//
fetch("https://reqres.in/api/unknown/2")
    .then(res=>res.json())
    .then(res=>console.log(res))

      //POST//
fetch("https://reqres.in/api/users",{
    method : "POST",
    body : JSON.stringify({
        "nombre" : "Sebastian",
        "apellido" : "Tua"
    }),
    headers: {"Content-type" : "application/json"}
}).then(res=>res.json())
  .then(res=>console.log(res))

  //axios//

  axios("informacion.txt")
  .then(res=>console.log(res.data))