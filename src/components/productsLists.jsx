import './bootstrap.min.css'
import './styles.css'
import { useState, useEffect } from "react"
import * as productServices from "../../services/products.services.js"
import *as CategoriesServices from '../../services/generos.services'

import {Link} from 'react-router-dom'

function ProductList(props){

    const [products, setProducts] = useState([])

    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        CategoriesServices.find()
        .then((data)=>{
            setCategory(data)
            console.log(data)
        })
    }, [])

    const filtrarCategoria = (category) => {
        setSelectedCategory(category);
      };
    
    const all = () => {
    setSelectedCategory(null);
    };

    const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

    useEffect(()=>{
        productServices.find()
        .then(data => {
            setProducts(data)
            console.log(data)
        })
    }, [])

    return (
        <div className="row m-auto">
        <div className="col-lg-3 categorias">
        <h3>Categorías</h3>
        {category.map((category)=>{
                    return <button onClick={() => filtrarCategoria(category)} key={category} value={category} className="btn btn-secondary">{category}</button>
                })}
        <button className="btn btn-secondary" onClick={() => all()}>All</button>
        </div>
            {filteredProducts.map(({id, title, price, image}) =>
            <div key={id} className="col-lg-3 p-3 contenedor-producto">
                <Link to={`/products/${id}`}>
                <div className="div-imagen">
                    <img src={`${image}`}></img>
                </div>
                <div className="div-title">
                    <h3>{title}</h3>    
                </div>
                <div className="div-price">
                    <p>{price} USD</p>
                    <Link to={`/products/${id}`} className="btn btn-secondary me-3 w-100">Ver</Link> 
                </div>
                </Link>
            </div>
            )}
        </div>
    )
}

export default ProductList