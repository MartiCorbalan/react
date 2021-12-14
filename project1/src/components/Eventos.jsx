import React, {Fragment, useState} from 'react'

const Eventos = () => {

    const [texto, setText] = useState('texto desde estado')

    const eventoCLick = () =>{
        console.log('diste un click')
        setText('cambiando el texto')
    }

    return (
        <Fragment>
            <hr />
            <h2>{ texto }</h2>
            <button onClick={ () => eventoCLick ()}>Click</button>
        </Fragment>
    )
}

export default Eventos
