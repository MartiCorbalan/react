import React from 'react'

const Imagen = (props) => {
    return (
        //las {} sirven para entrar directamente a la propiedad del prop
        <img src={props.urlImagen} className='mr-3' alt=""/>
    )
}

/* ejemplo donde no usamos props para acceder a la propiedad  */
  /*   const Imagen = ({urlImagen}) => {
        return (
            <img src={urlImagen} className='mr-3' alt=""/>
        )
    } */


export default Imagen