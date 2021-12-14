import React from 'react'

const Formulario = () => {
    //estados
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista, setLista] = React.useState([])




    const guardarDatos = (e) =>{
        e.preventDefault()
       

        if(!fruta.trim()){
            console.log('esta vacio fruta')
            return
        }
        if(!descripcion.trim()){
            console.log('esta vacio descripcion')
            return

        }

        console.log('procesando datos... ' + fruta + " "+ descripcion)



        setLista([
            ...lista,
            {Nfruta: fruta, Ndescripcion: descripcion}
        ])


        //para limpiar los datos
        e.target.reset()
        setFruta('')
        setDescripcion('')

    }


    return (
        <div>
            <h2>Formularios</h2>
                {/* onSubmit mandar el formulario a trabes del metodo get*/}
            <form onSubmit={ guardarDatos }>


                <input type="text" 
                placeholder="ingrese fruta"
                className="form-control mb-2"
                //detectamos todo lo que el user escriba
                onChange={ e => setFruta(e.target.value) }
                />

            <input type="text" 
                placeholder="ingrese descripcion"
                className="form-control mb-2"
                //guardamos lo que el use escribe en el input
                onChange={ e => setDescripcion(e.target.value) }
                /> 

            <button className="btn btn-primary btn-block" type="submit">Agregar</button>

            </form>
        
        <ul>
            {
                lista.map((item, index) =>(
                    <li key={index}>
                        {item.Nfruta} - {item.Ndescripcion}
                    </li>
                ))
            }
        </ul>
        
        
        </div>
    )
}

export default Formulario
