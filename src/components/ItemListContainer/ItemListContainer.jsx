import ItemList from "../ItemList/ItemList";
import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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
        <>
            <ItemList productos={productos}/>
        </>
    )
};

export default ItemListContainer;
