class Contacto {
    constructor(id, nombre, email, motivo,  comentario) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.motivo = motivo;
        this.comentario = comentario;
        this.fecha = new Date().toLocaleString;

    }



}



let form = document.querySelector("#contact-form")
form.addEventListener("submit", e => {
    e.preventDefault();
    let data = Object.fromEntries(
        new FormData(e.target)
    )
    let val = validar_data(data.nombre, data.email, data.motivo, data.comentario)
    if (val) {
        contactos.push(new Contacto(contactos.length + 1, data.nombre, data.apellido, data.email, data.patente, data.marca, data.año, data.telefono, data.comentario, data.data))
        localStorage.setItem("contactos", "")
            let nuev_contacto = JSON.stringify(contactos)
            localStorage.setItem("contactos", nuev_contacto)
        Toastify({
            text: "Comentario Enviado",
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

function validar_data(nombre,  email, motivo, comentario) {
    if (nombre == "" || motivo == "" || email == "" || comentario == "") {
        return false;
    }
    return true;
}