async function find() {
    return fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
}

export {
    find
}