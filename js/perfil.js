


let u = localStorage.getItem("user_actual")
usuarios.forEach(e => {
    if(e.usuario == u){
        let user = document.querySelector("#about")
        let user_actual = document.createElement("div")
user_actual.innerHTML =`
<div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-text go-to">
                            <div class="row about-list">
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>Nombre</label>
                                        <p>${e.nombre.toUpperCase()}</p>
                                    </div>
                                    <div class="media">
                                        <label>Apellido</label>
                                        <p>${e.apellido.toUpperCase()}</p>
                                    </div>
                                    <div class="media">
                                        <label>Edad</label>
                                        <p>${e.edad}</p>
                                    </div>
                                    <div class="media">
                                        <label>E-mail</label>
                                        <p>${e.email.toUpperCase()}</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>Usuario</label>
                                        <p>${e.usuario}</p>
                                    </div>
                                    <div class="media">
                                        <label>Contraseña</label>
                                        <p>${e.contrasenia}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-avatar">
                            <img src="${e.img}" title="" alt="">
                        </div>
                    </div>
                </div>
            </div>
`
user.appendChild(user_actual)
    }
});
