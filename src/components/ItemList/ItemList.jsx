import React from 'react'

import { Link } from "react-router-dom"

import "./ItemList.css"

const ItemList = ({ productos }) => {

    return (
        <div className='bg'>
            <h1 className='titulosProductos'>Productos</h1>
            <div className='productos'>
            {
                productos.map((element)=>{
                    return(
                            <div className="tarjeta" key={element.id}>
                                <img className="tarjeta__img" src={element.imagenDos} loading="lazy" alt={element.descripcion}/>
                                <div className="tarjeta__index">
                                    <h3 className="tarjeta__title">{element.nombre}</h3>
                                    <p className="descripcion">{element.descripcion}</p>
                                    <p className="precioIndex">${element.precio},00</p>
                                    <Link to={`/item/${element.id}`}>
                                        <button>Ver Mas</button>
                                    </Link>
                                </div>
                            </div>
                    )
                })
                
            }
            </div>
        </div>
    )
}

export default ItemList