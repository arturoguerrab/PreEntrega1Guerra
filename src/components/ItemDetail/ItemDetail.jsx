import React from 'react'

import './ItemDetail.css'

const ItemDetail = ({ producto, contador, sumar, restar, onAdd }) => {

    return (

        <div className='producto__container'>
            <img src={producto.imagenDos} alt={producto.descripcion} />
            <div>
                <span>{producto.descripcion}</span>
                <h1>{producto.nombre}</h1>
                <div>
                    <p> ${producto.precio},00</p>
                    <div>
                        <button onClick={restar}>-</button>
                        <span className='contador'>{contador}</span>
                        <button onClick={sumar}>+</button>
                    </div>
                </div>
                <p>{producto.about}</p>
                <button onClick={onAdd}>AÑADIR AL CARRITO</button>
            </div>
        </div>
        
    )
}

export default ItemDetail