import axios from 'axios'

// constantes
const dataInicial = {
    /* array : [],
    offset: 0 */
    count: 0,
    next: null,
    previous: null,
    results: []

}

// types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'
const POKE_INFO_EXITO = 'POKE_INFO_EXITO'

// reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case POKE_INFO_EXITO:
            return {...state, unPokemon: action.payload}
        default:
            return state
    }
}


// acciones
export const unPokeDetalleAccion = (url = 'https://pokeapi.co/api/v2/pokemon/1/') => async(dispatch) =>{

 

    if(localStorage.getItem(url)){
        dispatch({
            type:POKE_INFO_EXITO,
            payload: JSON.parse(localStorage.getItem(url))
        })
        console.log('desde localstorage')
        return
    }

    try {
        console.log('des de api')
        const res = await axios.get(url)
       //console.log(res.data)
        dispatch({
            type:POKE_INFO_EXITO,
            payload: {
                nombre: res.data.name,
                ancho: res.data.weight,
                alto: res.data.height,
                imagen: res.data.sprites.front_default
            }
        })
        localStorage.setItem(url, JSON.stringify({
            nombre: res.data.name,
            ancho: res.data.weight,
            alto: res.data.height,
            imagen: res.data.sprites.front_default
        }))
    } catch (error) {
        console.log(error)
    }
}





export const obtenerPokemonesAccion = () => async (dispatch) => {

    // console.log('getState', getState().pokemones.offset)
    //accedemos al offset
    //const offset = getState().pokemones.offset
    /* const{ offset} = getState().pokemonest */ //otra forma de acceder

    if(localStorage.getItem('offset=0')){
        console.log('datos guardados')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem('offset=0')) //destranforma el objeto 
            
        }) 
        return
    }

    try {
        console.log('datos des de la api')
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
        console.log(res.data)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            //payload: res.data.results,
            payload: res.data //pasamos en el payload todo lo que viene de data, y esta respuesta la pasamos a la dataInicial
        })
        //transforma todo el objeto en una cadena de string
        localStorage.setItem('offset=0', JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}


export const siguientePokemonAccion = () => async (dispatch, getState) =>{

    // primera alternativa
    /* const offset = getState().pokemones.offset
    const siguiente = offset + 20 */

    //segunda alternativa
   /*  const offset = getState().pokemones.offset
    const siguiente = offset + numero */

    const next = getState().pokemones.next //next es la url con todos los datos la pasamos al get y la pasamos a la dataInicial y la pasamos en el payload
    if(localStorage.getItem(next)){
        console.log('datos guardados')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(next)) //destranforma el objeto 
            
        }) 
        return
    }

    try {
        console.log('datos des de la api')
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            //payload: res.data.results
            //otra forma de 
             payload:res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }

}

export const anteriorPokemonAccion = () => async(dispatch, getState) =>{
                                //pokemones es lo que usamos en el store rootReducer
    const {previous} = getState().pokemones //previous contiene la url anterior 

    if(localStorage.getItem(previous)){
        console.log('datos guardados')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(previous)) //destranforma el objeto 
            
        }) 
        return
    }
    try {
        console.log('datos des de la api')
        const res = await axios.get(previous)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
             payload:res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }

}













