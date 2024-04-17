import ProductList from "../src/components/productsLists"
import { useState, useEffect } from "react"

function HomePage(){
   return ( 
            <div>
            <section className="banner">
                <div className='container titulo-portada'>
                    <h1>Welcome Clothes Site</h1>               
                </div>
                <div className="div-figure">
                <figure>                  
                    <picture >
                        <source media="(max-width: 576px)" srcSet="/fondo-cel.png"/>
                        <source media="(max-width: 768px)" srcSet="/fondo-tablet.png"/>
                        <img src="/fondo.png" alt="banner-taste"/>
                    </picture>
                </figure>
                </div>
            </section>
            <section className="catalogo container">
            <h2>Nuestro Catálogo</h2>
            <ProductList></ProductList> 
            </section>  
            </div> 
          
          )}

export default HomePage