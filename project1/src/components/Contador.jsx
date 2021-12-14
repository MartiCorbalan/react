import React from 'react'

const Contador = () => {
  //definimos nuestro state (contador)
  const [contador, setContador] = React.useState(0)

  return (
    <div>
      <h2>Contador</h2>
      <h3>nuestro numero aumentando: {contador}</h3>

       {/* operador ternario  */}
      <h4>
        {
          /* evaluar   ?       exito       :   negativa */
          contador > 2 ? 'es mayor a 2' : 'es menor a dos'
        }
      </h4>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Disminuir</button>
    </div>
  )
}

export default Contador
