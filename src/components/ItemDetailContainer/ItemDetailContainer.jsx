import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  
  const [producto,setProducto]= useState([])
  const item = useParams();

  useEffect(()=>{

    const getData = async ()=>{
        let response = await fetch('https://arturoguerrab.github.io/jsonData/db.json');
        let result = response.json();
        return result;
      }

    getData()
      .then((res) =>{
        const productoSeleccionado = res.find((element)=>element.id === Number(item.id))
        setProducto(productoSeleccionado)
      })

  },[item])

  return (

    <div className="producto">
      <ItemDetail producto={producto}/>
    </div>
    
  )
}

export default ItemDetailContainer