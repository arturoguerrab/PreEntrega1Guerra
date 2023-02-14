import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  
  const {productos,setProductos}=useState([])


  useEffect(()=>{
    const getData = async ()=>{
        let response = await fetch('productos.json');
        let result = response.json();
        return result;
      }

    getData()
    .then(res =>{
      setProductos(res)
    })
  },[])
  // result.sort(()=> Math.random()-0.5)


  return (
    <div>s</div>
  )
}

export default ItemDetailContainer