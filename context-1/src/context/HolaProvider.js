import React from 'react'

export const HolaContext = React.createContext()

const HolaProvider = (props) => {
   
   const hola = 'hola des de global'
   
    return (
        <HolaContext.Provider value={{hola}}>
            {props.children}
        </HolaContext.Provider>
    )
}

export default HolaProvider
