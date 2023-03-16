import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import Checkout from '../Checkout/Checkout'
import FormCheckout from '../FormCheckout/FormCheckout'

const CheckoutContainer = () => {

    const {cart, limpiarCarrito, eliminarProductoId, precioFinal} = useContext(CartContext)
    console.log(cart)
    
    const [compra,setcompra] = useState(false)
    const [ordenId,setOrdenId] = useState(null)

    if(ordenId){
        return(
            <div>{ordenId}</div>
        )
    }
    return (
        !compra ?<Checkout setcompra={setcompra} cart={cart} limpiarCarrito={limpiarCarrito} eliminarProductoId={eliminarProductoId} precioFinal={precioFinal}/>
                :<FormCheckout cart={cart} precioFinal={precioFinal} limpiarCarrito={limpiarCarrito} setOrdenId={setOrdenId}/>
    )
}

export default CheckoutContainer