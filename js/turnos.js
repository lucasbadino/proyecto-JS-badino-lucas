class Turno {
    constructor(id, nombre, apellido, email, dominio, marca_modelo, anio, tel, comentario, fecha) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.dominio = dominio;
        this.marca_modelo = marca_modelo;
        this.anio = anio;
        this.tel = tel;
        this.comentario = comentario;
        this.fecha = fecha;

    }



}



let clave = "turnos"


let form = document.querySelector("#form-turnos")
form.addEventListener("submit", e => {
    e.preventDefault();
    let data = Object.fromEntries(
        new FormData(e.target)
    )
    let val = validar_data(data.nombre, data.apellido, data.email, data.patente, data.marca, data.año, data.telefono, data.comentario, data.data)
    if (val) {
        if (localStorage.getItem(clave)) {
            turnos = []
            let nuevo_arreglo = localStorage.getItem(clave)
            nuevo_arreglo = JSON.parse(nuevo_arreglo)
            nuevo_arreglo.forEach(e => {
                turnos.push(e)
            })
        }
        turnos.push(new Turno(turnos.length + 1, data.nombre, data.apellido, data.email, data.patente, data.marca, data.año, data.telefono, data.comentario, data.data))
        let nuevo_arreglo = JSON.stringify(turnos)
        localStorage.setItem(clave, nuevo_arreglo)


        Toastify({
            text: "Turno registrado",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    } else {
        Toastify({
            text: "No dejes campos vacios",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }


})


function validar_data(nombre, apellido, email, patente, marca, año, telefono, comentario, data) {
    if (nombre == "" || apellido == "" || email == "" || patente == "" || marca == "" || año == "" || isNaN(año) || telefono == "" || comentario == "" || data == "") {
        return false;
    }
    return true;
}