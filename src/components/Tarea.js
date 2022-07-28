import React from "react";
import '../style/Tarea.css'
import {FaTimesCircle} from 'react-icons/fa'

function Tarea({ id,texto, completada,tareaCompletada, tareaEliminada }){
    return <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
        <div className="texto-contenedor"
             onClick={() => tareaCompletada(id)}>
            {texto}
        </div>
        <div className="tarea-icono" onClick={() => tareaEliminada(id)}>
            <FaTimesCircle className="icono" />
        </div>
    </div>
}

export default Tarea