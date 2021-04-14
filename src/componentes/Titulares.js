import { connect } from 'react-redux';
import React from 'react';

const Titulares = ({titulares, quitarTitular})=> (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
        {
            titulares.map(j => (
                <article className="titular" key={j.id}>
                    <div>
                        <img src={j.foto} alt={j.nombre}/>
                        <button onClick={()=> quitarTitular(j)}>X</button>

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
    titulares: state.titulares
  
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador){
        dispatch({
            type:'QUITAR_TITULAR',
            jugador

        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)

