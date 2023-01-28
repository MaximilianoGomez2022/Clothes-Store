async function find() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener los proyectos')
            }
        })
}

async function findById(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener las peliculas')
            }
        })
}

export {
    find,
    findById
}