import { useState, useEffect } from "react"
import * as peliculasServices from "../services/products.services.js"

import {Link} from 'react-router-dom'

function HomePage(){

    const [peliculas, setPeliculas] = useState([])

    useEffect(()=>{
        peliculasServices.find()
        .then(data => {
            setPeliculas(data)
            console.log(data)
        })
    }, [])

   return ( 
            <div>
            <section className="banner">
                <div className='container titulo-portada'>
                    <h1>Welcome Clothes Site</h1>               
                </div>
                <div className="div-figure">
                <figure>                  
                    <picture >
                        <source media="(max-width: 576px)" srcset="/fondo-cel.png"/>
                        <source media="(max-width: 768px)" srcset="/fondo-tablet.png"/>
                        <img src="/fondo.png" alt="banner-taste"/>
                    </picture>
                </figure>
                </div>
            </section>
            <section className="catalogo container">
            <h2>Catálogo</h2>
            <div className="row m-auto">
                {peliculas.map(({id, title, price, image}) =>
                <div key={id} className="col-lg-4 p-3 contenedor-producto">
                    <Link to={`/products/${id}`}>
                    <div className="div-imagen">
                        <img src={`${image}`}></img>
                    </div>
                    <div className="div-title">
                        <h2>{title}</h2>    
                    </div>
                    <div className="div-price">
                        <p>{price} USD</p>
                        <Link to={`/products/${id}`} className="btn btn-secondary me-3 w-100">Ver</Link> 
                    </div>
                    </Link>
                </div>
                )}
            </div>
            </section>
            </div> 
          
          )}

export default HomePage