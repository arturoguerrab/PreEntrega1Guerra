import React, { useState } from "react";
import {collection, serverTimestamp, addDoc, updateDoc,doc} from "firebase/firestore"
import { db } from "../../firebaseConfig";
const FormCheckout = ({cart, precioFinal, setOrdenId, limpiarCarrito }) => {

    const [userInfo, setUserInfo] = useState({nombre:"", telefono:"", correo:""})
    const [validacion, setValidacion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInfo.correo === validacion){
            
            const orden = {
                buyer: userInfo,
                items: cart,
                total: precioFinal(),
                estado:"Generada",
                date: serverTimestamp()
            }

            const orderCollection = collection(db,"orders")
            addDoc(orderCollection, orden)
            .then (res => setOrdenId(res.id))
            .catch(err=>console.log(err))
            
            cart.map(producto=>{
                updateDoc(doc(db,'items',producto.id), {stock: producto.stock - producto.quantity})
            })

            limpiarCarrito()


        }else{
            alert("los correos deben coincidir")
        }
        
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Nombre y Apellido:
            <input 
                type="text" 
                name="nombre" 
                placeholder="Juan Perez" 
                onChange={(e)=> setUserInfo({...userInfo, nombre:e.target.value})}
            />
        </label>
        <label>
            Numero de Telefono
            <input 
                type="tel" 
                name="telefono" 
                placeholder="11 1234 5678" 
                onChange={(e)=> setUserInfo({...userInfo, telefono:e.target.value})}/>
        </label>
        <label>
            Correo Electronico:
            <input 
                type="email" 
                name="email" 
                placeholder="ejemplo@correo.com" 
                onChange={(e)=> setUserInfo({...userInfo, correo:e.target.value})}/>
        </label>
        <label>
            Reingrese Correo Electronico:
            <input 
                type="email" 
                name="email" 
                placeholder="ejemplo@correo.com"
                onChange={(e)=> setValidacion(e.target.value)}/>
        </label>
        <button>Comprar</button>
        </form>
    </div>
    );
};

export default FormCheckout;
