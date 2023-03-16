import React, { useState } from "react";

import {collection, serverTimestamp, addDoc, updateDoc,doc} from "firebase/firestore"
import { db } from "../../firebaseConfig";

import "./FormCheckout.css"

import Swal from 'sweetalert2'

const FormCheckout = ({cart, precioFinal, setOrdenId, limpiarCarrito}) => {

    const [userInfo, setUserInfo] = useState({nombre:"", telefono:"", correo:""})
    const [validacion, setValidacion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInfo.correo === validacion){
            Swal.fire({
                title: 'Deseas finalizar la compra?',
                text: "La accion no se podra deshacer ",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, quiero comprar'
            }).then((result) => {
                if (result.isConfirmed) {
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

                    setTimeout(() => {
                        limpiarCarrito()
                    }, 2000);
                    
                }
            })
            
            
        
        }else{
            Swal.fire(
                'Tus Correos no coinciden',
                'Intentalo nuevamente',
                'error'
            )
        }
        
    }

    return (
    <div className="formContainer">
        <h1><strong>Completa tus datos para realizar la compra</strong></h1>
        <span>*Recuerda: tus correos deben coincidir*</span>

        <form onSubmit={handleSubmit} className="formCheckout">
        <label>
            Nombre y Apellido:
            <input 
                type="text" 
                name="nombre" 
                placeholder="Juan Perez" 
                required
                onChange={(e)=> setUserInfo({...userInfo, nombre:e.target.value})}
            />
        </label>
        <label>
            Numero de Telefono
            <input 
                type="tel" 
                name="telefono" 
                placeholder="11 1234 5678" 
                required
                onChange={(e)=> setUserInfo({...userInfo, telefono:e.target.value})}/>
        </label>
        <label>
            Correo Electronico:
            <input 
                type="email" 
                name="email" 
                placeholder="ejemplo@correo.com" 
                required
                onChange={(e)=> setUserInfo({...userInfo, correo:e.target.value})}/>
        </label>
        <label>
            Reingrese Correo Electronico:
            <input 
                type="email" 
                name="email" 
                placeholder="ejemplo@correo.com"
                required
                onChange={(e)=> setValidacion(e.target.value)}/>
        </label>
        <button>Comprar</button>
        </form>
    </div>
    );
};

export default FormCheckout;
