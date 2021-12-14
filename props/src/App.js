import React from 'react';
import Comentario from './components/Comentario';
import Saludo from './components/Saludo'


function App() {
  return (
    <div className="container mt-5">
     <h1>Proyecto des de cero</h1>
     <Saludo persona='hypno' edad={30} />
     <Saludo persona='david' edad={12} />
     <hr/>
    <h3>Cajita de comentarios</h3>
    <Comentario
    urlImagen='https://shortest.link/Fgu'
    persona='hypno'
    texto='hola como le va'
    />

    <Comentario
     urlImagen='https://shortest.link/Fgu'
     persona='david'
     texto=' aaaaaaaaa'
    />

    </div>
  );
}

export default App;
