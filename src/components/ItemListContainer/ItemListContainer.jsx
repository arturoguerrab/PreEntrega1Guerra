import React from 'react';

import ItemList from "../ItemList/ItemList";
import { db } from '../../firebaseConfig';


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getDocs, collection} from "firebase/firestore"

import "./ItemListContainer.css"



const ItemListContainer = () => {

    const [ productos, setProductos ] = useState([]);

    const categoria = useParams();

    useEffect(() => {
    
        const itemCollection = collection(db, 'items')
        getDocs(itemCollection)
            .then((res)=>{
                const productos = res.docs.map(product =>{
                    return{
                        ...product.data(),
                        id:product.id
                    }
                })

                if(categoria.id != undefined){
                    const filtro = productos.filter((element)=>element.categoria === categoria.id)
                    setProductos(filtro);
                }else{
                    setProductos(productos) 
                }
                
            })
        
    }, [categoria]);
    

    return (

        <div className="productos">
            <ItemList productos={productos}/>
        </div>
        
    )
};

export default ItemListContainer;
