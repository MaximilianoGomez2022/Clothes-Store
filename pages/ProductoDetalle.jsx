import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import * as ProductosServices from "../services/products.services"

function ProductDetalle(){
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
        ProductosServices.findById(id)
        .then(data => {
            setProduct(data)
        })
    }, [id])

    return <div className="container">
                <section className="row detalle">
                <div className="text-center col-md-5">
                    <img src={`${product.image}`}></img>
                </div>

                <div className="col-md-7 text-left">
                    <h2>{product.title}</h2>
                    <h3>Price {product.price} USD</h3>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                </div>
                </section>               
            </div>
}

export default ProductDetalle