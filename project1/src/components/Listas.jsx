import React, {useState} from 'react'

const Listas = () => {


    /* estados y map */

    /* const estadoInicial = [1,2,3,4,5] */

    //array de objetos
    const estadoInicial = [
        {id: 1, texto: 'tarea1'},
        {id: 2, texto: 'tarea2'},
        {id: 3, texto: 'tarea3'},
    ]

    const [lista, setLista] = useState(estadoInicial)


    /* unimos 2 arrays */
    /* const arrayUno = ['Chile', 'Argentina']
    const arrayDos = ['Perú', 'Mexico']

    const Unidos = [...arrayUno, ...arrayDos]
    console.log(Unidos) */


    //para agregar un objeto a un array, se usan las ... antes de la lista
    const agregarElemento = () =>{
        console.log('click')
        setLista([
            ...lista,
            {id: 4, texto: 'tarea4'},
        ])
    }

    return (
        <div>
            <h2>Listas</h2>
            {
                /* siempre que usemos un map, necesitamos una key */
                lista.map((item, index) => (
                    <h4 key={index}> {item.texto}</h4>
                ))
            }

            <button onClick={() => agregarElemento()}>Agregar</button>
        </div>
    )
}

export default Listas
