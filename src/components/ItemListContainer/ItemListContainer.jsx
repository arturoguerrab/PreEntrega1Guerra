import React from 'react';
import { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import Loader from '../Loader/Loader';

import "./ItemListContainer.css"

import { db } from '../../firebaseConfig';
import {getDocs, collection} from "firebase/firestore"


import { useParams } from "react-router-dom";




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
                    }, 500);
                    
                }else{
                    setTimeout(() => {
                        setProductos(productos);
                    }, 500);
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
