import React, { useState } from "react";

import {collection, serverTimestamp, addDoc, updateDoc,doc} from "firebase/firestore"
import { db } from "../../../firebaseConfig";

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
                        return true
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

        <div className="h-full sm:w-10/12 mx-auto flex flex-col justify-center items-center pt-[80px] pb-[80px] gap-4">
            <h1 className="font-bold text-lg sm:text-3xl">Completa tus datos para realizar la compra</h1>
            <span className="italic">*Recuerda: tus correos deben coincidir*</span>

            <form onSubmit={handleSubmit} className="grid grid-rows-5 justify-items-center h-[500px] w-3/4">
                <label className="row-span-1 flex flex-col w-full items-start justify-center gap-2 text-xl">
                    Nombre y Apellido:
                    <input
                        className="w-full bg-transparent border-b-2 border-black pb-1 ps-4 focus:outline-none focus:border-[#e427ab]" 
                        type="text" 
                        name="nombre" 
                        placeholder="Juan Perez" 
                        required
                        onChange={(e)=> setUserInfo({...userInfo, nombre:e.target.value})}
                    />
                </label>
                <label className="row-span-1 flex flex-col w-full items-start justify-center gap-2 text-xl">
                    Numero de Telefono
                    <input 
                        className="w-full bg-transparent border-b-2 border-black pb-1 ps-4 focus:outline-none focus:border-[#e427ab]"
                        type="tel" 
                        name="telefono" 
                        placeholder="11 1234 5678" 
                        required
                        onChange={(e)=> setUserInfo({...userInfo, telefono:e.target.value})}/>
                </label>
                <label className="row-span-1 flex flex-col w-full items-start justify-center gap-2 text-xl">
                    Correo Electronico:
                    <input
                        className="w-full bg-transparent border-b-2 border-black pb-1 ps-4 focus:outline-none focus:border-[#e427ab]" 
                        type="email" 
                        name="email" 
                        placeholder="ejemplo@correo.com" 
                        required
                        onChange={(e)=> setUserInfo({...userInfo, correo:e.target.value})}/>
                </label>
                <label className="row-span-1 flex flex-col w-full items-start justify-center gap-2 text-xl">
                    Confirmacion:
                    <input 
                        className="w-full bg-transparent border-b-2 border-black pb-1 ps-4 focus:outline-none focus:border-[#e427ab]"
                        type="email" 
                        name="email" 
                        placeholder="ejemplo@correo.com"
                        required
                        onChange={(e)=> setValidacion(e.target.value)}/>
                </label>
                <button className="row-span-1 w-[150px] self-center bg-gray-900 text-white hover:text-[#e427ab]">Comprar</button>
            </form>
        </div>
    );
};

export default FormCheckout;
