import React from 'react';
import { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import Loader from '../Loader/Loader';

import { db } from '../../firebaseConfig';
import {getDocs, collection} from "firebase/firestore"

import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [ productos, setProductos ] = useState([]);
    const categoria = useParams();

    useEffect(() => {

        
    
        const itemCollection = collection(db, 'items')
        
        setProductos([])

        getDocs(itemCollection)
            .then((res)=>{
                const productos = res.docs.map(product =>{
                    return{
                        ...product.data(),
                        id:product.id
                    }
                })
                
            setTimeout(() => {

                if(categoria.id !== undefined){
                    const filtro = productos.filter((element)=>element.categoria === categoria.id)
                    setProductos(filtro); 
                } else {
                    setProductos(productos);
                }
                
            },400)
        })
        
    }, [categoria]);

    if(productos.length<1){

        return (
            <div className= 'h-screen flex justify-center items-center'>
                <Loader/>
            </div>
        )
    }
    

    return (

        <div className='pt-[80px]'>
            <ItemList productos={productos}/>
        </div>
        
    )
};

export default ItemListContainer;
