import React from 'react';

import ItemList from "../ItemList/ItemList";
import { db } from '../../firebaseConfig';


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getDocs, collection} from "firebase/firestore"

import "./ItemListContainer.css"
import Loader from '../Loader/Loader';



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
                    setTimeout(() => {
                        setProductos(filtro);
                    }, 1000);
                    
                }else{
                    setTimeout(() => {
                        setProductos(productos);
                    }, 1000);
                }
                
            })
        
    }, [categoria]);

    if(productos.length<1){

        return (
            <div className='loader'>
                <Loader/>
            </div>
        )
    }
    

    return (

        <div>
            <ItemList productos={productos}/>
        </div>
        
    )
};

export default ItemListContainer;
