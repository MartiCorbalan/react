import React from "react";
//shortid sirve para generar ID automaticas
import shortid from "shortid";

function App() {
  const [tarea, setTarea] = React.useState("");
  const [tareas, setTareas] = React.useState([]);
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState("");
  const [error, setError] = React.useState(null); //null para evaluar

  const agregarTarea = (e) => {
    e.preventDefault();

    if (!tarea.trim()) {
      console.log("elemento vacio");
      setError('escriba algo porfa')
      return;
    }

    console.log(tarea);

    setTareas([...tareas, { id: shortid.generate(), nombreTarea: tarea }]);

    setTarea("");
    setError(null)
  };


  //DELETE
  //funcion para eliminar cosas de un formulario/array
  const eliminarTarea = id =>{
    /* console.log(id) */               //si el id es el mismo del item presionado, se eliminara, si es diferente lo dejara
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }


  //EDITAR
  //funcion para editar cosas de un formulario/array
  const editar = item =>{
    console.log(item)
    setModoEdicion(true)
    setTarea(item.nombreTarea)
    setId(item.id)
  }



  //CREAR para editar/ guardar edicion
  // vinculamos la tarea inicial con la de editar para que sea la misma pasada por parametros
  const editarTarea = e =>{
    e.preventDefault();

    if (!tarea.trim()) {
      console.log("elemento vacio");
      setError('escriba algo porfa')
      return;
    }
    //validamos array               
    /* evaluamos, si el id es igual, en el caso de editar, devolvemos el objeto que es propiedad nombreTarea con su valor tarea, que sera el nuevo valor editado,en caso que sea diferente, devolvemos los items que ya estan puestos*/
    const arrayEditado = tareas.map(
      item => item.id === id ? {id:id, nombreTarea : tarea} : item
                          /*propiedad:valor*/
                                    /* nombre tarea con lo que el use edita en tarea */
                                                          /* si es falso, devolvemos el item, para no editar todas las tareas */
      )                  
            
      /* guardamos array */
      setTareas(arrayEditado)
      setModoEdicion(false)
      setTarea('')
      setId('')  
      setError(null)                                                       
                                                                                        
  }


  return (
    <div className="Container mt-5">
      <h1 className="text-center">CRUD simple</h1>
      <hr />
      <div className="row">
        <div className="col-8 text-center ml-2">
          <h4 className="text-center "> Lista de tareas </h4>
          {/* mostrar tereas */}
          <ul className="list-group">

            {
              /* cuando no hay tareas, printa esto, y si hay tareas muestra las tareas */
              tareas.length === 0 ? (
                  <li className="list-group-item">NO hay tareas</li>
              ) : (
                tareas.map(item =>(
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.nombreTarea}</span>
                    <button 
                      className="btn btn-danger btn-sm float-right mx-2"
                      onClick={() => eliminarTarea(item.id)}
                      >
                      Eliminar
                    </button>
    
                    <button 
                      className="btn btn-warning btn-sm float-right"
                      onClick={() => editar(item)}
                      >
                      Editar
                    </button>
                  </li>
                ))
              )



          

            }

          </ul>
        </div>
        <div className="col4">
          <h4 className="text-center"> 
          {                /* true */         /* false */      
            modoEdicion ? 'Editar tarea' : ' Agregar tarea '
          }
          </h4>
          <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
            {
              //cuando el error tenga algo pintamos lo que tenga el error
              error ? <span className="text-danger">{error}</span> : null
            }
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese tarea"
              onChange={(e) => setTarea(e.target.value)}
              //pasamos el nuestro estado
              value={tarea}
            />

          {/* //pasamos de modo edicion a modo agregar igual que en el h4 de arriba, si esta en true o esta en false */}
          {/* false pinta boton agregar, true pinta boton editar */}
          {
            modoEdicion ? (
              <button className="btn btn-warning btn-block" type="submit" >
              Editar
            </button>
            ) : (
              <button className="btn btn-dark btn-block" type="submit">
              Agregar
            </button>
            )
          }

           
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
