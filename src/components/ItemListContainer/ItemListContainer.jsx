import React from 'react';

import ItemList from "../ItemList/ItemList";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css"


const ItemListContainer = () => {

    const [ productos, setProductos ] = useState([]);

    const categoria = useParams();

    const getData = async () => {
        let response = await fetch('https://arturoguerrab.github.io/jsonData/db.json');
        let result = response.json();
        return result;
    };

    useEffect(() => {
    
    getData()
        .then((res)=>{
            if(categoria.id != undefined){
                const filtro = res.filter((element)=>element.categoria === categoria.id)
                setProductos(filtro);
            }else{
                setProductos(res) 
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
