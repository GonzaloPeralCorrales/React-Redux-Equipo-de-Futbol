import React from 'react';
import { Provider } from "react-redux"; 
import store from './Store';
import Jugadores from './componentes/Jugadores';
import EquipoSeleccionado from './componentes/EquipoSeleccionado';

function App() {
  return (
    <Provider store={store}>
      <main>
      <Jugadores />
      <EquipoSeleccionado />
      
      </main>
    </Provider>
  );
}

export default App;
