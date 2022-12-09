const divCards = document.querySelector(".cards")
const lista = document.querySelector("#lista")
const botonFiltrar = document.querySelector("#filtrar")

const mostrarCategorias = async () => {
    //MI CATEGORIA
    const categoriasFetch = await fetch("categorias.json")
    const categoriasJson = await categoriasFetch.json()
    console.log(categoriasJson)

    categoriasJson.forEach(categorias => {
        const option = document.createElement("option")
        option.innerText = `${categorias}`
        lista.append(option)
    })
}

const buscarTodosProductos = async () => {
    //FORMA DIRECTA
    const productosFetch = await fetch("productos.json")
    const productosJson = await productosFetch.json()
    console.log(productosJson)
    productosJson.forEach(prod => {
        const { category, id, description, image, price, title } = prod // destructury
        divCards.innerHTML +=
            `<div class="card" style="width: 18rem;">
            <img src="${image} " class="card-img-top" alt="...">
            <div class="card-body"> 
            <h5>${title} </h5>
            <p class="card-text"> ${description} </p>
            <p> ${price}</p>
            <button id= ${id} class= "btn-primary">AGREGAR</button>
            </div>
        </div>`

    })
}

const buscarProductosPorCategoria = async () => {
    divCards.innerHTML = " "
    const categoriaElegida = lista.value
    //MI CATEGORIA
    const productosFetch = await fetch("productos.json")
    const productosJson = await productosFetch.json()
    //console.log(productosJson)
    const productosFiltrado = productosJson.filter(prod => prod.category === categoriaElegida)
    //FILTRAR DE FORMA MANUAL
    productosFiltrado.forEach(prod => {

        const { category, id, description, image, price, title } = prod // destructury
        divCards.innerHTML +=
            `<div class="card" style="width: 18rem;">
                <img src="${image} " class="card-img-top" alt="...">
                <div class="card-body"> 
                <h5>${title} </h5>
                <p class="card-text"> ${description} </p>
                <p> ${price}</p>
                <button id= ${id} class= "btn-primary">AGREGAR</button>
                </div>
            </div>`
    })

}

buscarTodosProductos()
mostrarCategorias()
botonFiltrar.onclick = buscarProductosPorCategoria

const productos = []
class Productos {
    constructor(id, price, title, image, description) {
        this.id = id
        this.price = price
        this.title = title
        this.image = image
        this.description = description

    }
}

productos.push(new Productos(1, 400, "Heladera", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fravega.com%2Fp%2Fheladera-no-frost-siam-hsi-rt60-roja-420lt-160241%2F&psig=AOvVaw1LCndiNi1DZOxhig-EpXJ6&ust=1670644708589000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMC7rdXS6_sCFQAAAAAdAAAAABAE", "Celular en buen estado"))
productos.push(new Productos(2, 250, "Lavarropas", "https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-1123013214-lavarropas-drean-814-next-ddr-eco-rojo-_JM&psig=AOvVaw3wqqjpOBiZv-Rlfk1LqCT0&ust=1670644757429000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKC7sezS6_sCFQAAAAAdAAAAABAE", "Ipad deñado"))
productos.push(new Productos(3, 200, "Cafetera", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.otero.com.ar%2Ftienda%2Fpequenos-electro-y-salud%2Fpequenos-cocina%2Fcafeteras%2Fcafetera-moulinex-dolce-gusto-genio-s-plus-pv340558-roja&psig=AOvVaw1KYHAy9wqlzq4hicDlhT4i&ust=1670644732145000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCX4eDS6_sCFQAAAAAdAAAAABAE", "tv antiguo"))
productos.push(new Productos(4, 100, "Microondas", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsogostore.fr%2Fproducto%2Fhorno-microondas-retro-rojo%2F&psig=AOvVaw18IMGHk9NDaEbJrHoCsk1G&ust=1670644101163000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCw5bPQ6_sCFQAAAAAdAAAAABA4", "computador con virus"))
console.log(JSON.stringify(productos))

//LIBRERIA SWEETALERT

Swal.fire('Bienvenid@ ¿Cúal es tu nombre?')

const inputNombre = document.getElementById("nombre")
const botonSweet = document.getElementById("sweetAlert")
const botonToastify = document.getElementById("Toastify")

botonSweet.onclick = () => {
    Swal.fire({
        title: `Hola ${inputNombre.value} ¿Qué deseas el día de hoy?`,
        icon: "question",
        background: "#9370db",
        timer: 5000,
    })

}

//LIBRERIA TOASTIFY JS

botonToastify.onclick = () => {
    Toastify({
        text: "@tienda-electro",
        duration: 6000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        gravity: "bottom"
    }).showToast()
}