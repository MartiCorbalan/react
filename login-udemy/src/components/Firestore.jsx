import React from 'react'
import {db} from '../firebase'

import moment from 'moment'
import 'moment/locale/es'

const Firestore = (props) => {

    const [tareas, setTareas] = React.useState([])
    const [tarea, setTarea] = React.useState('')
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [id, setId] = React.useState('')
  
    const [ultimo, setUltimo] = React.useState(null)
    const [desactivar, setDesactivar] = React.useState(false)//desactivar boton
  

    React.useEffect(() => {
      
      const obtenerDatos = async () => {
  
        try {

          setDesactivar(true)
  
          //llamamos a la base de datos y pintamos los datos
          const data = await db.collection(props.user.uid)
          .limit(2)
          .orderBy('fecha')
          /* .orderBy('fecha', 'desc') */
          .get()
          const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          
          //para encontrar el ultimo elemento del array 
          setUltimo(data.docs[data.docs.length - 1]) 


          console.log(arrayData)
          setTareas(arrayData)

          //llamamos a la base de datos
          const query = await db.collection(props.user.uid)
          .limit(2)
          .orderBy('fecha')
          .startAfter(data.docs[data.docs.length - 1])
          .get()
          //si esta vacio
          if(query.empty){
            console.log('no hay mas documentos')
            setDesactivar(true)
          }else{
            setDesactivar(false)
          }
          
        } catch (error) {
          console.log(error)
        }
  
      }
  
      obtenerDatos()
  
    }, [props.user.uid])
  
    //paginacion de las tareas
    const siguiente = async() =>{
      console.log('siguiente')

      try {
        const data = await db.collection(props.user.uid)
        .limit(2)
        .orderBy('fecha')
        //para que comienze despues del documento ingresado
        .startAfter(ultimo)
        .get()
      const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
       //juntamos los dos arrays en setTareas
      setTareas([
          ...tareas,
          ...arrayData
        ])
        setUltimo(data.docs[data.docs.length - 1])

        const query = await db.collection(props.user.uid)
            .limit(2)
            .orderBy('fecha')
            .startAfter(data.docs[data.docs.length - 1])
            .get()
        //si esta vacio
        if(query.empty){
          console.log('no hay mas documentos')
          setDesactivar(true)
        }else{
          setDesactivar(false)
        }

      } catch (error) {
        console.log(error)
      }
    }


    const agregar = async (e) => {
      e.preventDefault()
  
      if(!tarea.trim()){
        console.log('est?? vacio')
        return
      }
  
      try {
  
        const nuevaTarea = {
          name: tarea,
          fecha: Date.now()
        }
        const data = await db.collection(props.user.uid).add(nuevaTarea)
  
        setTareas([
          ...tareas,
          {...nuevaTarea, id: data.id}
        ])
  
        setTarea('')
        
      } catch (error) {
        console.log(error)
      }
  
      console.log(tarea)
    }
  
    const eliminar = async (id) => {
      try {
        
        await db.collection(props.user.uid).doc(id).delete()
  
        const arrayFiltrado = tareas.filter(item => item.id !== id)
        setTareas(arrayFiltrado)
  
      } catch (error) {
        console.log(error)
      }
    }
  
    const activarEdicion = (item) => {
      setModoEdicion(true)
      setTarea(item.name)
      setId(item.id)
    }
  
    const editar = async (e) => {
      e.preventDefault()
      if(!tarea.trim()){
        console.log('vacio')
        return
      }
      try {
        
        await db.collection(props.user.uid).doc(id).update({
          name: tarea
        })
        const arrayEditado = tareas.map(item => (
          item.id === id ? {id: item.id, fecha: item.fecha, name: tarea} : item
        ))
        setTareas(arrayEditado)
        setModoEdicion(false)
        setTarea('')
        setId('')
      } catch (error) {
        console.log(error)
      }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h3>Lista de tareas</h3>
                    <ul className="list-group">
                        {
                        tareas.map(item => (
                            <li className="list-group-item" key={item.id}>
                              
                            {item.name}  <br />
                            Fecha:  {moment(item.fecha).format("LLL")}
                            <button 
                                className="btn btn-danger btn-sm float-right"
                                onClick={() => eliminar(item.id)}
                            >
                                Eliminar
                            </button>
                            <button 
                                className="btn btn-warning btn-sm float-right mr-2"
                                onClick={() => activarEdicion(item)}
                            >
                                Editar
                            </button>
                            </li>
                        ))
                        }
                    </ul>
                    <button className="btn btn-info btn-block mt-2 btn-sm"
                    onClick={() => siguiente()}
                    disabled={desactivar}
                    >
                      Siguiente...
                    </button>
                </div>
                <div className="col-md-6">
                    <h3>
                        {
                        modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
                        }
                    </h3>
                    <form onSubmit={modoEdicion ? editar : agregar}>
                        <input 
                        type="text"
                        placeholder="Ingrese tarea"
                        className="form-control mb-2"
                        onChange={e => setTarea(e.target.value)}
                        value={tarea}
                        />
                        <button 
                        className={
                            modoEdicion ? 'btn btn-warning btn-block' : 'btn btn-dark btn-block'
                        }
                        type="submit"
                        >
                        {
                            modoEdicion ? 'Editar' : 'Agregar'
                        }
                        </button>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default Firestore