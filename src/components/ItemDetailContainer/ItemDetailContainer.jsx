import React from 'react'
import Swal from 'sweetalert2'

import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'

import {getDocs, collection} from "firebase/firestore"
import { db } from '../../firebaseConfig'
import { CartContext } from '../../context/CartContext'
import Loader from '../Loader/Loader'


const ItemDetailContainer = () => {
  
  const {addToCart, obtenerCantidadId} = useContext(CartContext)
  
  const item = useParams();

  const [producto,setProducto]= useState([])

  let cantidad = obtenerCantidadId(producto.id)
  const [contador, setContador] = useState()
  useEffect(()=>{setContador(cantidad||1)},[cantidad])

  const sumar = ()=> {
    contador < producto.stock && setContador(contador + 1)
  }

  const restar = ()=> {
    contador > 1 && setContador(contador - 1)
  }

  const onAdd = ()=>{
    const seleccion = { 
      ...producto,
      quantity: contador
    };

    addToCart(seleccion)

    Swal.fire(
      'Producto agregado con exito!',
      '',
      'success'
    )
  }


  useEffect(()=>{

    const itemCollection = collection(db, 'items')
    
    getDocs(itemCollection)

    .then(res=>{

      const productos = res.docs.map(product =>{
        return {
            ...product.data(),
            id:product.id
        }
      })

      const productoSeleccionado = productos.find((element)=>element.id === (item.id))
      setTimeout(() => {
        setProducto(productoSeleccionado)
      }, 1000);
      
    })

  },[item])

  if(producto.length<1){
    return(
      <div className='loader'>
        <Loader/>
      </div>
    )
  }
  return (

    <div className="producto">
      <ItemDetail producto={producto} contador={contador} sumar={sumar} restar={restar} onAdd={onAdd}/>
    </div>
    
  )
}

export default ItemDetailContainer