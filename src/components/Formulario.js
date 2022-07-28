import React,{useState} from "react";
import '../style/Formulario.css'
import { v4 as uuidv4 } from 'uuid';

function Formulario(props){
// Almaceno el estado de una cadena de texto
    const [message, setMessage] = useState("")

// Actualizo el estado con el valor de un input -----------------------------
    const manejarCambio = (e) => {                                       //  
        setMessage(e.target.value)                                       //  
    }                                                                    //  
                                                                         //   
    const manejoEnvio = e => {                                           //
        e.preventDefault() //Detengo el comportamiento por defecto                                             //
                                                                         //
        const tareaNueva = {                                             //
            id: uuidv4(), //Asigno id aleatorio por el paquete importado                                               //
            texto: message, //lo que se escribio en el input el valor actual                                             //
            completada: false                                            //
        }                                                                //
                                                                         //
        props.onSubmit(tareaNueva)                                       //                                                                   //           
    }                                                                    //
                                                                         //       
    return (             
//El form envia el valor del input                                                //   
        <form className="formulario-tarea" onSubmit={manejoEnvio}>       //   
            <input                                                       //
                type="text"                                              //
                name="texto"                                             //
                className="texto-input"                                  //
                placeholder="Escribe una tarea"                          //
                onChange={manejarCambio}                                 //
             />                                                          //
            <button className="boton-formulario">Enviar</button>  //-------       
        </form>
    )
}

export default Formulario