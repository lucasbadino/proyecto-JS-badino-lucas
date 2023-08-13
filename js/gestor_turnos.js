


if (localStorage.getItem("turnos")) {
    let card_turnos = document.querySelector("#card_turnos")
    card_turnos.innerHTML = ""
    let arr_turnos = localStorage.getItem("turnos")
    arr_turnos = JSON.parse(arr_turnos)
    arr_turnos.forEach(e => {
        let nuevo_turno = document.createElement("div")
        nuevo_turno.innerHTML = `
    <div class="card card-margin">
    <div class="card-header no-border">
        <h5 class="card-title">${e.nombre.toUpperCase()}  ${e.apellido.toUpperCase()}</h5>
    </div>
    <div class="card-body pt-0">
        <div class="widget-49">
            <div class="widget-49-title-wrapper">
                <div class="widget-49-meeting-info">
                    <span class="widget-49-pro-title">Vehiculo: ${e.marca_modelo.toUpperCase()}</span>
                    <span class="widget-49-pro-title">Año: ${e.anio}</span>
                    <span class="widget-49-pro-title">Patente: ${e.dominio.toUpperCase()}</span>
                    <span class="widget-49-meeting-time">Solicito: ${e.comment}</span>
                </div>
            </div>
            <ol class="widget-49-meeting-points">
                <li class="widget-49-meeting-item"><span>Correo: ${e.email}</span></li>
                <li class="widget-49-meeting-item"><span>Tel: ${e.tel}</span></li>
                <li class="widget-49-meeting-item"><span>Fecha: ${e.fecha}</span></li>
            </ol>
            <div class="widget-49-meeting-action">
                <a href="#" class="btn btn-sm btn-flash-border-primary">Nº reserva: ${e.id}</a>
            </div>
        </div>
    </div>
    </div>
    
                            `
        card_turnos.appendChild(nuevo_turno)
    });

} else {
    let card_turnos = document.querySelector("#card_turnos")
    let nuevo_turno = document.createElement("div")
    nuevo_turno.innerHTML = `<h1 class="text-center">No hay turnos registrados</h1>`
    card_turnos.appendChild(nuevo_turno)
}


if (localStorage.getItem("contactos")) {
    let card_contactos = document.querySelector("#card_contacto")
    card_contactos.innerHTML = ""
    let arr_contactos = localStorage.getItem("contactos")
    arr_contactos = JSON.parse(arr_contactos)
    arr_contactos.forEach(e => {
        let nuevo_contactos = document.createElement("div")
        nuevo_contactos.classList.add("d-flex")
        nuevo_contactos.innerHTML = `
        <div class="col-md-4 col-sm-6 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                <div class="content">
                    <h6 class="category">Best cards</h6>
                    <h4 class="title"><a href="#">Blue Card</a></h4>
                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                </div>
            </div> <!-- end card -->
        </div>
    </div>
    
                            `
                            card_contactos.appendChild(nuevo_contactos)
    });

} else {
    let card_contactos = document.querySelector("#card_contacto")
    let nuevo_contactos = document.createElement("div")
    nuevo_contactos.innerHTML = `<h1 class="text-center">No hay contactos registrados</h1>`
    card_contactos.appendChild(nuevo_contactos)
}

