//lugar donde se almacena la data(informacion)

import { createStore } from 'redux';

const initialState = {
    jugadores:[{
        id:1,
        nombre:'Juan Carlos'
    },
    {
        id:2,
        nombre:'Beto Quiroga'
    },
    {
        id:3,
        nombre:'Alejo Garcia'
    }],
    titulares:[],
    suplentes:[]


}

const reducerEntrenador= (state=initialState, action)=>{
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares:state.titulares.concat(action.jugador),
            jugadores:state.jugadores.filter(j=> j.id !== action.jugador.id)
        }
    }
    if(action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if(action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j=> j.id !== action.jugador.id),
            //FUERA DE LOS TITULARES VUELVE A ESTAR EN EL EQUIPO
            jugadores: state.jugadores.concat(action.jugador)
        }

    } 
    if(action.type === "QUITAR_SUPLENTE"){
        console.log('hello')
    return {  
        ...state,
        suplentes:state.suplentes.filter(j=> j.id !== action.jugador.id),
        jugadores:state.jugadores.concat(action.jugador)
}}
return state
}

export default createStore(reducerEntrenador)





