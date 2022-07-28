import React,{useState} from "react";
import Formulario from "../components/Formulario";
import '../style/ListaTareas.css'
import Tarea from "./Tarea";

function ListaTareas() {

//declaro un estado array vacio
const [lista, setLista] = useState([]) 

const agregarTarea = (tarea) => {
// si el texto contiene espacios
  if(tarea.texto.trim()){
  // Le saco los espacios
    tarea.texto = tarea.texto.trim()

  // Almaceno las tareas y las junto las que ya tenia con la nueva
    const tareaActualizadas = [tarea, ...lista]
    // Actualizo el estado
    setLista(tareaActualizadas)
    console.log(tareaActualizadas)
  }
}

const eliminarTarea = id => {
  const eliminado = lista.filter(tarea => tarea.id !== id)
  setLista(eliminado)
}

const tareaSeleccionada = id => {
  const tareasActualizadas = lista.map(tarea => {
    if(tarea.id === id){
      tarea.completada = !tarea.completada
    }
    return tarea
  })
  setLista(tareasActualizadas)
}

  return (
    <>
 {/* Formulario recibe una props que es una funcion */}
      <Formulario onSubmit={agregarTarea}/>
      <div className="tarea-lista-contenedor">
        {
//Reocrro el array de objetos de tareas
          lista.map((tarea) =>
            <Tarea texto={tarea.texto} //Le paso el texto
                  completada={tarea.completada} //Le paso si esta o no competada false o true
                  key={tarea.id} //Le paso key id autogenerada
                  id={tarea.id} //Le paso la id autogenerada
                  tareaEliminada={eliminarTarea}
                  tareaCompletada={tareaSeleccionada}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaTareas;
