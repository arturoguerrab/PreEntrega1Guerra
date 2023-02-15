import React from 'react'

import './ItemDetail.css'

const ItemDetail = ({ producto }) => {

    return (

        <div className='producto__container'>
            <img src={producto.imagenDos} alt={producto.descripcion} />
            <div>
                <span>{producto.descripcion}</span>
                <h1>{producto.nombre}</h1>
                <div>
                    <p> ${producto.precio},00</p>
                    <select name="select" id="cantidadProducto" className="select__data">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <p>{producto.about}</p>
                <button>AÑADIR AL CARRITO</button>
            </div>
        </div>
        
    )
}

export default ItemDetail