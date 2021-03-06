import React from 'react'
import Formulario from './Formulario'
import { ChatContext } from '../context/ChatProvider'


const Chat = () => {

    const {mensajes, usuario} = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)

    React.useEffect(()=>{
        console.log(refZonaChat)
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    }, [mensajes])


    return (
        <div 
        className='mt-3 px-2'
        style={{height: '75vh', overflowY: 'scroll'}}
        ref={refZonaChat}
        >

            {
                mensajes.map((item, index)=> (
                    usuario.uid === item.uid ? (
                    <div className='d-flex justify-content-end mb-2' key={index}>
                        <span className='badge badge-pill badge-primary'>
                            {item.texto}
                        </span>
                    </div>
                    ) : (
                        <div className='d-flex justify-content-start mb-2' key={index}>
                            <span className='badge badge-pill badge-secondary'>
                            {item.texto}
                            </span>
                        </div> 
                    )
                ))  
            }
            <Formulario/>
        </div>
    )
}

export default Chat
