async function find() {
    return fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
}

async function filtrar(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
}

export {
    find,
    filtrar
}