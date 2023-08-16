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
productos.push(new Producto(productos.length + 1, "Chevrolet", "Cubiertas 205-65-17 Michelin", "nuevo", "https://www.llantasoriginales.com/prod_images/0000000128_1.jpg", 20, 36900))
productos.push(new Producto(productos.length + 1, "Fiat", "Punto 1.6", "nuevo", "https://radiomitre-la100-prod.cdn.arcpublishing.com/resizer/khS2WGx_zfWaWgQXaSeDJM5zwRo=/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/radiomitre/Q2S6VDADRRFEJDN7ZVY45S6ADI.jpg", 20, 12000))
productos.push(new Producto(productos.length + 1, "Ford", "Kit filtros y aceite ford focus", "nuevo", "https://neumaticospons.com.ar/wp-content/uploads/2021/06/LUBRI20FORD-3.jpeg", 20, 125000))
productos.push(new Producto(productos.length + 1, "Toyota", "Optica delantera toyota corolla +14", "nuevo", "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/440/707/products/optica-hilux-estandar-izq-16-191-b08406a6fdf9b9304316189379014573-640-0.jpg", 20, 89000))
productos.push(new Producto(productos.length + 1, "Peugeot", "Parabrisas original", "nuevo", "https://http2.mlstatic.com/D_NQ_NP_627332-MLA32840729042_112019-O.webp", 20, 59360))

compras = new Array()


turnos = new Array()

contactos = new Array()

