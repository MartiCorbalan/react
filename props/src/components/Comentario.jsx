import React from 'react'
import Imagen from './Imagen'

    //usando props
    const Comentario = (props) => {
       console.log(props) 
        return (
            <div className='media'>
             <Imagen urlImagen={props.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-0">{props.persona}</h5>
                    {props.texto}
                </div>
            </div>
        )
    } 

    //sin usar props
    /* const Comentario = ({urlImagen, persona, texto}) => {
        /*  console.log(props) 
         return (
             <div className='media'>
              <Imagen urlImagen={urlImagen}/>
                 <div className="media-body">
                     <h5 className="mt-0">{persona}</h5>
                     {texto}
                 </div>
             </div>
         )
     } */
 


export default Comentario
