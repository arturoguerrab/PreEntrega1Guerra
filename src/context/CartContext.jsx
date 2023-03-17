import React from 'react'

import { useState, createContext} from 'react'

import Swal from 'sweetalert2'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart= (product)=>{
        let existe = existeEnCart(product.id)

        if(existe){
            
            let nuevoCarrito = cart.map((element)=>{
                if( element.id === product.id){
                    let nuevoProducto ={
                    ...element,
                    quantity: product.quantity
                    }
                    return nuevoProducto
                } else{
                    return element
                }
            })
            setCart(nuevoCarrito)
        }else{
            setCart([...cart, product])
        }
    }
    
    const limpiarCarrito = ()=>{
            setCart([])
    }
    
    const eliminarProductoId =(id)=>{
        let nuevoCarrito= cart.filter(product => product.id !== id)
        Swal.fire({
            title: 'Deseas eliminar este producto?',
            text: "La accion no se podra deshacer ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then((result) => {

            if (result.isConfirmed) {
                setCart(nuevoCarrito)
                Swal.fire(
                    'Eliminado',
                    '',
                    'success'
                )
            }
        })
    }

    const existeEnCart= (id) => cart.some(element => element.id === id);
    
    const obtenerCantidadId = (id)=>{
        let producto = cart.find(element => element.id===id)
        return producto?.quantity
    }

    const totalProductosCarrito = ()=>{
        const total = cart.reduce((acc,element)=>{
            return acc + element.quantity},0)

            return total
    }

    const precioFinal = ()=>{
        const total = cart.reduce((acc,element)=>{
            return acc + (element.precio * element.quantity)
        },0)
        return total
    }

    let data = {
        cart,
        addToCart,
        limpiarCarrito,
        eliminarProductoId,
        obtenerCantidadId,
        totalProductosCarrito,
        precioFinal

    }

    return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider