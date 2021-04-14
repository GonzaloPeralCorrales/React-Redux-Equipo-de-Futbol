import { connect } from 'react-redux';
import React from 'react';

const Suplentes = ({suplentes, quitarSuplente})=> (
    <section>
        <h2>Suplentes</h2>
        <div className="cancha">
        {
            suplentes.map(j => (
                <article className="suplente" key={j.id}>
                    <div>
                        <img src={j.foto} alt={j.nombre}/>
                        <button onClick={()=> quitarSuplente(j)}>X</button>

                    </div>
                    <p>{j.nombre}</p>
                </article>
            ))
        }

        </div>
    </section>
)

// con esto conecto mi componente con el store
const mapStateToProps = state => ({
    suplentes: state.suplentes
  
})

//mapDispatchToProps son funciones(ex=quitarSuplente)q se pasan
//a propiedades
const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador){
        
        dispatch({
            type:"QUITAR_SUPLENTE",
            jugador
        })
    }    
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)



