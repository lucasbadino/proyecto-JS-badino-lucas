class Turno{
    constructor(id,nombre,apellido,email,dominio,marca_modelo,anio,tel,comment,fecha){
     this.id = id;
     this.nombre = nombre;
     this.apellido = apellido;
     this.email = email;
     this.dominio = dominio;
     this.marca_modelo = marca_modelo;
     this.anio = anio;
     this.tel = tel;
     this.comment = comment;
     this.fecha = fecha;
       
    }
    


}



let clave = "turnos"


let form = document.querySelector("#form-turnos")
form.addEventListener("submit", e=>{
    e.preventDefault();
    let data = Object.fromEntries(
        new FormData(e.target)
    )
let turno = turnos.push(new Turno(turnos.length + 1 ,data.nombre, data.apellido, data.email, data.patente, data.marca,data.año, data.telefono, data.comentario, data.data))

})
