usuarios = new Array()
usuarios.push(new User(usuarios.length + 1, "lucas", "lucas123", "lucas", "badino", 26, "email@gmail.com","https://metricool.com/wp-content/uploads/PERFIL-TIKTOK-scaled.jpg"))
if(localStorage.getItem("usuarios")){
    usuarios = []
    let user = localStorage.getItem("usuarios")
    user = JSON.parse(user)
    user.forEach(e => {
        usuarios.push(e)
    });
}

productos = new Array()
productos.push(new Producto(productos.length + 1, "Chevrolet", "Cubiertas 205-65-17 Michelin", "nuevo", "https://www.llantasoriginales.com/prod_images/0000000128_1.jpg", 20, 89000))
productos.push(new Producto(productos.length + 1, "Chevrolet", "Cubiertas 205-65-17 Michelin", "nuevo", "https://www.llantasoriginales.com/prod_images/0000000128_1.jpg", 20, 12000))
productos.push(new Producto(productos.length + 1, "Chevrolet", "Cubiertas 205-65-17 Michelin", "nuevo", "https://www.llantasoriginales.com/prod_images/0000000128_1.jpg", 20, 89000))
productos.push(new Producto(productos.length + 1, "Chevrolet", "Cubiertas 205-65-17 Michelin", "nuevo", "https://www.llantasoriginales.com/prod_images/0000000128_1.jpg", 20, 89000))
productos.push(new Producto(productos.length + 1, "Peugeot", "Parabrisas original", "nuevo", "https://www.llantasoriginales.com/prod_images/0000000128_1.jpg", 20, 59360))

compras = new Array()


turnos = new Array()

contactos = new Array()

